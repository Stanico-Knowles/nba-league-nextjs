import Layout from "@/components/Layout";
import { Roster } from "@/schemas/roster";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { z } from "zod";

export default async function page({ params }: { params: { teamID: string } }) {
  const resp = await fetch(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${params.teamID}/roster`,
    { next: { revalidate: 60 } }
  );
  const data: z.infer<typeof Roster> = await resp.json();

  return (
    <Layout>
      <div className="bg-white rounded-md max-w-2xl mx-auto">
        <div className="p-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-wider">
            {data.season.displayName} {data.team.displayName}
          </h1>
        </div>
        <div>
          <ul role="list" className="space-y-4">
            {data.athletes.map((athlete) => {
              return (
                <li key={athlete.id}>
                  <div className="flex flex-row items-center py-4 sm:py-0 px-4">
                    <div className="mx-4 min-w-[100px] sm:min-w-[250px]">
                      <Image
                        className="hidden sm:block"
                        src={
                          athlete?.headshot?.href
                            ? athlete.headshot.href
                            : "/player-default.svg"
                        }
                        alt={
                          athlete?.headshot?.alt
                            ? athlete.headshot.alt
                            : "Default player image"
                        }
                        width={250}
                        height={250}
                      />
                      <Image
                        className="block sm:hidden"
                        src={
                          athlete?.headshot?.href
                            ? athlete.headshot.href
                            : "/player-default.svg"
                        }
                        alt={
                          athlete?.headshot?.alt
                            ? athlete.headshot.alt
                            : "Default player image"
                        }
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <div className="mb-3 px-1 sm:px-2">
                        <h3 className="text-lg sm:text-3xl text-gray-900 font-bold tracking-wide">
                          {athlete.displayName}
                        </h3>
                        <h4 className="text-lg sm:text-2xl text-gray-800 font-bold">
                          #{athlete.jersey}
                        </h4>
                      </div>
                      <div className="flex flex-row divide-x mb-3">
                        <p className="text-gray-700 text-xs sm:text-sm px-1 sm:px-2">
                          {athlete.age} Y/O
                        </p>
                        <p className="text-gray-700 text-xs sm:text-sm px-1 sm:px-2">
                          {athlete.displayHeight}
                        </p>
                        <p className="text-gray-700 text-xs sm:text-sm px-1 sm:px-2">
                          {athlete.displayWeight}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-900 text-sm font-medium px-1 sm:px-2">
                          {athlete?.college?.name &&
                          athlete?.college?.mascot ? (
                            <span>
                              {athlete?.college?.name}{" "}
                              {athlete?.college?.mascot}
                            </span>
                          ) : (
                            <></>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
