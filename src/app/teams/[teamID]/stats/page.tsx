import Layout from "@/components/Layout";
import { Competitor } from "@/components/sidebar/ScoreContainer";
import { Team } from "@/schemas/teams";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { z } from "zod";

interface GameCompetitor extends Omit<Competitor, "record"> {}

interface Game {
  eventId: string;
  status: string;
  homeTeam: GameCompetitor;
  awayTeam: GameCompetitor;
}

const toCompetitorInterface = (team: any): GameCompetitor => ({
  id: team.team.id,
  abbreviation: team.team.abbreviation,
  fullName: team.team.displayName,
  score: parseInt(team.score) || 0,
  logo: team.team.logos[0].href
    ? team.team.logos[0].href
    : "https://a.espncdn.com/i/teamlogos/default-team-logo-500.png",
});

export default async function page({ params }: { params: { teamID: string } }) {
  const resp = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${params.teamID}`,
    { next: { revalidate: 60 } }
  );

  const team: z.infer<typeof Team> = await resp.json();

  const nextGame: Game = team.team.nextEvent[0].competitions.map((game) => {
    const homeTeam = game.competitors.find(
      (competitor) => competitor.homeAway === "home"
    );
    const awayTeam = game.competitors.find(
      (competitor) => competitor.homeAway === "away"
    );

    return {
      eventId: game.id,
      status:
        game.status.type.state === "pre"
          ? `Next game: ${game.status.type.shortDetail}`
          : game.status.type.name === "STATUS_HALFTIME"
          ? "Playing now: Halftime"
          : game.status.type.name === "STATUS_FINAL"
          ? "Final"
          : `Playing now: Q${game.status.period} ${game.status.displayClock}`,
      homeTeam: toCompetitorInterface(homeTeam),
      awayTeam: toCompetitorInterface(awayTeam),
    };
  })[0];

  const camelCaseToTitleCase = (camelCaseString: string): string => {
    const titleCaseString = camelCaseString.replace(/([A-Z])/g, " $1").trim();
    return titleCaseString.charAt(0).toUpperCase() + titleCaseString.slice(1);
  };

  const convertToTwoDecimalPlaces = (number: string): string => {
    if (Number.isInteger(number)) {
      return number;
    } else {
      return parseFloat(number).toFixed(2);
    }
  };

  return (
    <Layout page="teamStats">
      <div className="max-w-2xl px-4 mx-auto">
        <div>
          <h1 className="text-4xl font-bold">{team.team.displayName}</h1>
        </div>
        <div>
          <div className="flex flex-col border-y border-gray-200 pt-4 pb-2 my-8">
            <div className="flex flex-row text-xs text-red-500 font-medium mb-2">
              <p className="text-base ml-2">{nextGame.status}</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div>
                <Image
                  src={nextGame.homeTeam.logo}
                  alt={`${nextGame.homeTeam.fullName} logo`}
                  width={150}
                  height={150}
                />
              </div>
              <div className="font-bold w-12">
                {nextGame.homeTeam.abbreviation}
              </div>
              <div
                className={clsx(
                  "w-8",
                  nextGame.status === "Final" &&
                    nextGame.homeTeam.score > nextGame.awayTeam.score
                    ? "font-bold"
                    : ""
                )}
              >
                {nextGame.homeTeam.score}
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div>
                <Image
                  src={nextGame.awayTeam.logo}
                  alt={`${nextGame.awayTeam.fullName} logo`}
                  width={150}
                  height={150}
                />
              </div>
              <div className="font-bold w-12">
                {nextGame.awayTeam.abbreviation}
              </div>
              <div
                className={clsx(
                  "w-8",
                  nextGame.status === "Final" &&
                    nextGame.awayTeam.score > nextGame.homeTeam.score
                    ? "font-bold"
                    : ""
                )}
              >
                {nextGame.awayTeam.score}
              </div>
            </div>
          </div>
          <div className="space-y-8 ml-2">
            <div>
              <p className="text-lg font-medium">{team.team.standingSummary}</p>
            </div>
            <>
              {team.team.record.items.map((item) => {
                return (
                  <div key={item.description}>
                    <h4 className="text-xl font-bold mb-4">
                      {item.description}
                    </h4>
                    <table>
                      {item.stats.map((stat) => {
                        return (
                          <div key={stat.name} className="flex flex-row">
                            <thead className="w-48 border border-gray-200">
                              <tr>
                                <th className="text-base font-bold px-2 py-1">
                                  {camelCaseToTitleCase(stat.name)}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="w-48 border border-gray-200">
                              <tr>
                                <td className="px-2 py-1">
                                  {convertToTwoDecimalPlaces(
                                    String(stat.value)
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </div>
                        );
                      })}
                    </table>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </Layout>
  );
}
