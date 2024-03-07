import Layout from "@/components/Layout";
import { Teams } from "@/schemas/teams";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

export default async function page() {
  const resp = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams",
    { next: { revalidate: 60 } }
  );
  const data: z.infer<typeof Teams> = await resp.json();
  const teams = data.sports[0].leagues[0].teams;
  return (
    <Layout>
      <div className="bg-white rounded-md mx-auto flex justify-center">
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2">
          <>
            {teams.map((team) => {
              const dynamicStyle = {
                backgroundColor: `#${team.team.color}`,
              };
              return (
                <li
                  key={team.team.id}
                  className="sm:m-2 px-6 py-4 text-gray-900 border border-gray-200"
                >
                  <div className="flex flex-row items-center">
                    <div className="mx-6 hidden sm:block">
                      <Image
                        alt={team.team.logos[0].alt}
                        src={team.team.logos[0].href}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="mx-6 block sm:hidden">
                      <Image
                        alt={team.team.logos[0].alt}
                        src={team.team.logos[0].href}
                        width={40}
                        height={40}
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <h4 className="font-bold px-1 sm:px-2">
                        <span className="flex flex-row items-center space-x-1">
                          <span>{team.team.displayName}</span>
                        </span>
                      </h4>
                      <div className="flex flex-row divide-x divide-gray-200 text-xs sm:text-sm">
                        <Link
                          className="text-blue-500 px-1 sm:px-2 hover:cursor-pointer hover:text-blue-400"
                          href={`/teams/${team.team.id}/roster`}
                        >
                          Roster
                        </Link>
                        <Link
                          className="text-blue-500 px-1 sm:px-2 hover:cursor-pointer hover:text-blue-400"
                          href={`/teams/${team.team.id}/schedule`}
                        >
                          Schedule
                        </Link>
                        <Link
                          href={team.team.links[4].href}
                          className="text-blue-500 px-1 sm:px-2 hover:cursor-pointer hover:text-blue-400"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Tickets
                        </Link>
                      </div>
                      <button
                        className="w-fit ml-1 sm:ml-2 px-2 rounded-md text-white text-sm hover:opacity-90"
                        style={dynamicStyle}
                      >
                        + Follow
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </>
        </ul>
      </div>
    </Layout>
  );
}
