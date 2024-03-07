import React from "react";
import Navbar from "./Navbar";
import { z } from "zod";
import { Scoreboard } from "@/schemas/scorebord";
import ScoreContainer from "./ScoreContainer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resp = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
    { next: { revalidate: 60 } }
  );
  const data: z.infer<typeof Scoreboard> = await resp.json();
  return (
    <div className="flex min-h-full flex-col">
      <header>
        <Navbar />
      </header>

      <div className="mx-auto flex w-full items-start lg:gap-x-8 px-0 lg:px-4 lg:py-10">
        <aside className="sticky top-8 hidden w-44 max-h-screen shrink-0 lg:block overflow-y-auto">
          <ScoreContainer data={data} />
        </aside>

        <main className="flex-1">
          <div className="block mx-auto lg:hidden w-screen">
            <ScoreContainer data={data} flowDirection="row" />
          </div>
          <div className="py-10 lg:py-0">{children}</div>
        </main>

        <aside className="sticky top-8 hidden w-96 shrink-0 xl:block">
          <ScoreContainer data={data} />
        </aside>
      </div>

      <div className="bg-white p-6 ring-1 ring-gray-900/10">
        <p className="text-sm text-center leading-6 text-gray-900">
          Blah blah...will add meaningful text here. <br />
          <a
            href="https://github.com/Stanico-Knowles/nba-league-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            View source code
          </a>
          .
        </p>
      </div>
    </div>
  );
}
