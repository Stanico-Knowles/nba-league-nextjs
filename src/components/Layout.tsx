import React from "react";
import Navbar from "./Navbar";
import { z } from "zod";
import { Scoreboard } from "@/schemas/scorebord";
import ScoreContainer from "./sidebar/ScoreContainer";
import NewsContainer from "./sidebar/NewsContainer";
import { Teams } from "@/schemas/teams";
import Link from "next/link";
import Image from "next/image";

const getScoreboard = async (): Promise<z.infer<typeof Scoreboard>> => {
  const resp = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
    { next: { revalidate: 15 } }
  );
  const data: z.infer<typeof Scoreboard> = await resp.json();
  return data;
};

const getTeams = async (): Promise<z.infer<typeof Teams>> => {
  const resp = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams",
    { next: { revalidate: 15 } }
  );
  const data: z.infer<typeof Teams> = await resp.json();
  return data;
};

export default async function Layout({
  page,
  children,
}: {
  page?: string;
  children: React.ReactNode;
}) {
  const [scores, teams] = await Promise.all([getScoreboard(), getTeams()]);

  const teamsList = teams.sports[0].leagues[0].teams;

  const newsSideBarPages = ["teams", "teamStats"];

  return (
    <div className="flex min-h-full flex-col">
      <header>
        <Navbar />
      </header>

      <div className="mx-auto flex w-full items-start lg:gap-x-8 px-0 lg:px-4 lg:py-10">
        <aside className="sticky top-8 hidden w-44 max-h-screen shrink-0 lg:block overflow-y-auto no-scrollbar">
          <ScoreContainer data={scores} />
        </aside>

        <main className="flex-1">
          <div className="block mx-auto lg:hidden w-screen">
            <ScoreContainer data={scores} flowDirection="row" />
          </div>
          <div className="py-10 lg:py-0">
            {page === "home" ? <NewsContainer /> : <>{children}</>}
          </div>
        </main>

        <aside className="sticky top-8 hidden w-96 max-h-screen shrink-0 xl:block overflow-y-auto no-scrollbar">
          {/* This is my stretching content because the available data is a bit limited lol */}
          {page && newsSideBarPages.includes(page) ? (
            <NewsContainer />
          ) : (
            <div className="pt-6">
              <h4 className="text-lg font-bold mb-4">
                Check in with your favorite team
              </h4>
              <div>
                <ul>
                  <>
                    {teamsList.map((team) => {
                      const dynamicStyle = {
                        color: `#${team.team.color}`,
                      };
                      return (
                        <li key={team.team.id} className="py-3">
                          <div className="flex flex-row items-center space-x-4">
                            <div>
                              <Image
                                alt={team.team.logos[0].alt}
                                src={team.team.logos[0].href}
                                width={80}
                                height={80}
                              />
                            </div>
                            <div>
                              <h4
                                style={dynamicStyle}
                                className="font-bold text-gray-100"
                              >
                                {team.team.displayName}
                              </h4>
                              <Link
                                className="text-blue-500 text-xs hover:cursor-pointer hover:text-blue-400"
                                href={`/teams/${team.team.id}/stats`}
                              >
                                Check in
                              </Link>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </>
                </ul>
              </div>
            </div>
          )}
        </aside>
      </div>

      <div className="bg-white p-6 ring-1 ring-gray-900/10">
        <p className="text-sm text-center leading-6 text-gray-900">
          <a
            href="https://github.com/Stanico-Knowles/nba-league-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            View source code
          </a>
        </p>
      </div>
    </div>
  );
}
