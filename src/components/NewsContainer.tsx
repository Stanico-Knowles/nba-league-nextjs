import React from "react";
import { z } from "zod";
import { News } from "@/schemas/news";
import Image from "next/image";

export default function NewsContainer({
  news,
}: {
  news: z.infer<typeof News>;
}) {
  return (
    <>
      <div className="mb-3">
        <h2 className="text-lg font-bold uppercase">Around the league</h2>
      </div>
      <div className="space-y-2 divide-y">
        {news.articles.map((article) => {
          return (
            <div key={article.dataSourceIdentifier} className="flex flex-col">
              <h3 className="text-base py-2">{article.headline}</h3>
              {/* <Image
                src={article.images[0].url}
                alt={article.images[0].name}
                width={380}
                height={150}
              /> */}
              <a
                className="text-blue-500 text-sm hover:cursor-pointer hover:text-blue-400"
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
    </>
  );
}
