import React from "react";
import { z } from "zod";
import { News } from "@/schemas/news";
import Image from "next/image";

export default async function NewsContainer() {
  const resp = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news",
    { next: { revalidate: 15 } }
  );
  const news: z.infer<typeof News> = await resp.json();
  return (
    <div className="max-w-2xl px-4 lg:px-8 mx-auto">
      <div className="mb-3">
        <h2 className="text-2xl font-bold uppercase">Headlines</h2>
      </div>
      <div className="space-y-2 divide-y">
        {news.articles.map((article) => {
          return (
            <div key={article.dataSourceIdentifier} className="flex flex-col">
              <h3 className="text-base font-medium py-2">{article.headline}</h3>
              <Image
                src={article.images[0].url}
                alt={article.images[0].name}
                className="rounded-md mt-2 mb-3"
                width={600}
                height={400}
              />
              <p className="text-sm mb-3">{article.description}</p>
              <a
                className="text-blue-500 mb-2 text-sm hover:cursor-pointer hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                href={article.links.web.href}
              >
                Read story
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
