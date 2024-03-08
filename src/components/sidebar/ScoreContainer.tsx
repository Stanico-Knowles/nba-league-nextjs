import { Scoreboard } from "@/schemas/scorebord";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { z } from "zod";

interface Game {
  eventId: string;
  status: string;
  homeTeam: Competitor;
  awayTeam: Competitor;
}

export interface Competitor {
  id: string;
  abbreviation: string;
  fullName: string;
  score: number;
  record: string;
  logo: string;
}

const toCompetitorInterface = (team: any): Competitor => ({
  id: team.team.id,
  abbreviation: team.team.abbreviation,
  fullName: team.team.displayName,
  score: parseInt(team.score),
  record: team.records[0].summary,
  logo: team.team.logo
    ? team.team.logo
    : "https://a.espncdn.com/i/teamlogos/default-team-logo-500.png",
});

export default function ScoreContainer({
  data,
  flowDirection = "col",
}: {
  data: z.infer<typeof Scoreboard>;
  flowDirection?: "col" | "row" | undefined | null;
}) {
  const games: Game[] = data.events.map((event) => {
    const homeTeam = event.competitions[0].competitors.find(
      (competitor) => competitor.homeAway === "home"
    );
    const awayTeam = event.competitions[0].competitors.find(
      (competitor) => competitor.homeAway === "away"
    );

    return {
      eventId: event.competitions[0].id,
      status:
        event.competitions[0].status.type.state === "pre"
          ? event.competitions[0].status.type.shortDetail.split("-")[1].trim() // Honestly didn't understand the point of the left side
          : event.competitions[0].status.type.name === "STATUS_HALFTIME"
          ? "Halftime"
          : event.competitions[0].status.type.name === "STATUS_FINAL"
          ? "Final"
          : `Q${event.competitions[0].status.period} ${event.competitions[0].status.displayClock}`,
      homeTeam: toCompetitorInterface(homeTeam),

      awayTeam: toCompetitorInterface(awayTeam),
    };
  });

  return (
    <div
      className={clsx(
        "flex",
        flowDirection === "col"
          ? "flex-col"
          : "flex-row overflow-x-auto relative"
      )}
    >
      {games.map((game) => {
        return (
          <div
            key={game.eventId}
            className="flex flex-col border-x lg:border-x-0 border-y border-gray-200 p-2"
          >
            <div className="flex flex-row text-xs text-red-500 mb-2">
              {game.status}
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div>
                <Image
                  src={game.homeTeam.logo}
                  alt={game.homeTeam.fullName}
                  width={30}
                  height={30}
                />
              </div>
              <div className="font-bold w-12">{game.homeTeam.abbreviation}</div>
              <div
                className={clsx(
                  "w-8",
                  game.status === "Final" &&
                    game.homeTeam.score > game.awayTeam.score
                    ? "font-bold"
                    : ""
                )}
              >
                {game.homeTeam.score}
              </div>
              <div className="w-12 text-xs text-gray-500">
                {game.homeTeam.record}
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <div>
                <Image
                  src={game.awayTeam.logo}
                  alt={game.awayTeam.fullName}
                  width={30}
                  height={30}
                />
              </div>
              <div className="font-bold w-12">{game.awayTeam.abbreviation}</div>
              <div
                className={clsx(
                  "w-8",
                  game.status === "Final" &&
                    game.awayTeam.score > game.homeTeam.score
                    ? "font-bold"
                    : ""
                )}
              >
                {game.awayTeam.score}
              </div>
              <div className="w-12 text-xs text-gray-500">
                {game.awayTeam.record}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
