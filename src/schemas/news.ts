import { z } from "zod";

export const News = z.object({
  header: z.string(),
  link: z.object({
    language: z.string(),
    rel: z.array(z.string()),
    href: z.string(),
    text: z.string(),
    shortText: z.string(),
    isExternal: z.boolean(),
    isPremium: z.boolean(),
  }),
  articles: z.array(
    z.union([
      z.object({
        dataSourceIdentifier: z.string(),
        description: z.string(),
        type: z.string(),
        premium: z.boolean(),
        links: z.object({
          api: z.object({
            news: z.object({ href: z.string() }),
            self: z.object({ href: z.string() }),
          }),
          web: z.object({ href: z.string() }),
          mobile: z.object({ href: z.string() }),
        }),
        categories: z.array(
          z.union([
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              topicId: z.number(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              leagueId: z.number(),
              league: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ leagues: z.object({ href: z.string() }) }),
                  web: z.object({ leagues: z.object({ href: z.string() }) }),
                  mobile: z.object({ leagues: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              teamId: z.number(),
              team: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ teams: z.object({ href: z.string() }) }),
                  web: z.object({ teams: z.object({ href: z.string() }) }),
                  mobile: z.object({ teams: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              athleteId: z.number(),
              athlete: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ athletes: z.object({ href: z.string() }) }),
                  web: z.object({ athletes: z.object({ href: z.string() }) }),
                  mobile: z.object({
                    athletes: z.object({ href: z.string() }),
                  }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
            }),
            z.object({
              type: z.string(),
              guid: z.string(),
              createDate: z.string(),
            }),
          ])
        ),
        headline: z.string(),
        images: z.array(
          z.union([
            z.object({
              dataSourceIdentifier: z.string(),
              name: z.string(),
              width: z.number(),
              id: z.number(),
              credit: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
            z.object({
              name: z.string(),
              width: z.number(),
              caption: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
          ])
        ),
        published: z.string(),
        lastModified: z.string(),
      }),
      z.object({
        dataSourceIdentifier: z.string(),
        description: z.string(),
        type: z.string(),
        premium: z.boolean(),
        links: z.object({
          api: z.object({
            news: z.object({ href: z.string() }),
            self: z.object({ href: z.string() }),
          }),
          web: z.object({ href: z.string() }),
          mobile: z.object({ href: z.string() }),
        }),
        categories: z.array(
          z.union([
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              leagueId: z.number(),
              league: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ leagues: z.object({ href: z.string() }) }),
                  web: z.object({ leagues: z.object({ href: z.string() }) }),
                  mobile: z.object({ leagues: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              teamId: z.number(),
              team: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ teams: z.object({ href: z.string() }) }),
                  web: z.object({ teams: z.object({ href: z.string() }) }),
                  mobile: z.object({ teams: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              athleteId: z.number(),
              athlete: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ athletes: z.object({ href: z.string() }) }),
                  web: z.object({ athletes: z.object({ href: z.string() }) }),
                  mobile: z.object({
                    athletes: z.object({ href: z.string() }),
                  }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              topicId: z.number(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
            }),
            z.object({
              type: z.string(),
              guid: z.string(),
              createDate: z.string(),
            }),
          ])
        ),
        headline: z.string(),
        images: z.array(
          z.object({
            dataSourceIdentifier: z.string(),
            name: z.string(),
            width: z.number(),
            id: z.number(),
            credit: z.string(),
            type: z.string(),
            url: z.string(),
            height: z.number(),
          })
        ),
        published: z.string(),
        lastModified: z.string(),
      }),
      z.object({
        dataSourceIdentifier: z.string(),
        description: z.string(),
        type: z.string(),
        premium: z.boolean(),
        links: z.object({
          api: z.object({
            news: z.object({ href: z.string() }),
            self: z.object({ href: z.string() }),
          }),
          web: z.object({ href: z.string() }),
          mobile: z.object({ href: z.string() }),
        }),
        categories: z.array(
          z.union([
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              topicId: z.number(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              athleteId: z.number(),
              athlete: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ athletes: z.object({ href: z.string() }) }),
                  web: z.object({ athletes: z.object({ href: z.string() }) }),
                  mobile: z.object({
                    athletes: z.object({ href: z.string() }),
                  }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              leagueId: z.number(),
              league: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ leagues: z.object({ href: z.string() }) }),
                  web: z.object({ leagues: z.object({ href: z.string() }) }),
                  mobile: z.object({ leagues: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              teamId: z.number(),
              team: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ teams: z.object({ href: z.string() }) }),
                  web: z.object({ teams: z.object({ href: z.string() }) }),
                  mobile: z.object({ teams: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              type: z.string(),
              guid: z.string(),
              createDate: z.string(),
            }),
          ])
        ),
        headline: z.string(),
        byline: z.string(),
        images: z.array(
          z.union([
            z.object({
              dataSourceIdentifier: z.string(),
              name: z.string(),
              width: z.number(),
              id: z.number(),
              credit: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
            z.object({
              name: z.string(),
              width: z.number(),
              caption: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
          ])
        ),
        published: z.string(),
        lastModified: z.string(),
      }),
      z.object({
        dataSourceIdentifier: z.string(),
        description: z.string(),
        type: z.string(),
        premium: z.boolean(),
        links: z.object({
          api: z.object({
            news: z.object({ href: z.string() }),
            self: z.object({ href: z.string() }),
          }),
          web: z.object({ href: z.string() }),
          mobile: z.object({ href: z.string() }),
        }),
        categories: z.array(
          z.union([
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              topicId: z.number(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              teamId: z.number(),
              team: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ teams: z.object({ href: z.string() }) }),
                  web: z.object({ teams: z.object({ href: z.string() }) }),
                  mobile: z.object({ teams: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              leagueId: z.number(),
              league: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ leagues: z.object({ href: z.string() }) }),
                  web: z.object({ leagues: z.object({ href: z.string() }) }),
                  mobile: z.object({ leagues: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              athleteId: z.number(),
              athlete: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ athletes: z.object({ href: z.string() }) }),
                  web: z.object({ athletes: z.object({ href: z.string() }) }),
                  mobile: z.object({
                    athletes: z.object({ href: z.string() }),
                  }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              type: z.string(),
              guid: z.string(),
              createDate: z.string(),
            }),
          ])
        ),
        headline: z.string(),
        byline: z.string(),
        images: z.array(
          z.union([
            z.object({
              dataSourceIdentifier: z.string(),
              name: z.string(),
              width: z.number(),
              id: z.number(),
              credit: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
            z.object({
              name: z.string(),
              width: z.number(),
              caption: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
          ])
        ),
        published: z.string(),
        lastModified: z.string(),
      }),
      z.object({
        dataSourceIdentifier: z.string(),
        description: z.string(),
        type: z.string(),
        premium: z.boolean(),
        links: z.object({
          api: z.object({
            news: z.object({ href: z.string() }),
            self: z.object({ href: z.string() }),
          }),
          web: z.object({ href: z.string() }),
          mobile: z.object({ href: z.string() }),
        }),
        categories: z.array(
          z.union([
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              topicId: z.number(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              leagueId: z.number(),
              league: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ leagues: z.object({ href: z.string() }) }),
                  web: z.object({ leagues: z.object({ href: z.string() }) }),
                  mobile: z.object({ leagues: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              teamId: z.number(),
              team: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ teams: z.object({ href: z.string() }) }),
                  web: z.object({ teams: z.object({ href: z.string() }) }),
                  mobile: z.object({ teams: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              athleteId: z.number(),
              athlete: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ athletes: z.object({ href: z.string() }) }),
                  web: z.object({ athletes: z.object({ href: z.string() }) }),
                  mobile: z.object({
                    athletes: z.object({ href: z.string() }),
                  }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              type: z.string(),
              guid: z.string(),
              createDate: z.string(),
            }),
          ])
        ),
        headline: z.string(),
        byline: z.string(),
        images: z.array(
          z.union([
            z.object({
              dataSourceIdentifier: z.string(),
              name: z.string(),
              width: z.number(),
              id: z.number(),
              credit: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
            z.object({
              name: z.string(),
              width: z.number(),
              caption: z.string(),
              type: z.string(),
              url: z.string(),
              height: z.number(),
            }),
          ])
        ),
        published: z.string(),
        lastModified: z.string(),
      }),
      z.object({
        dataSourceIdentifier: z.string(),
        description: z.string(),
        type: z.string(),
        premium: z.boolean(),
        links: z.object({
          api: z.object({
            news: z.object({ href: z.string() }),
            self: z.object({ href: z.string() }),
          }),
          web: z.object({ href: z.string() }),
          mobile: z.object({ href: z.string() }),
        }),
        categories: z.array(
          z.union([
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              topicId: z.number(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              teamId: z.number(),
              team: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ teams: z.object({ href: z.string() }) }),
                  web: z.object({ teams: z.object({ href: z.string() }) }),
                  mobile: z.object({ teams: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              leagueId: z.number(),
              league: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ leagues: z.object({ href: z.string() }) }),
                  web: z.object({ leagues: z.object({ href: z.string() }) }),
                  mobile: z.object({ leagues: z.object({ href: z.string() }) }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              id: z.number(),
              description: z.string(),
              type: z.string(),
              sportId: z.number(),
              athleteId: z.number(),
              athlete: z.object({
                id: z.number(),
                description: z.string(),
                links: z.object({
                  api: z.object({ athletes: z.object({ href: z.string() }) }),
                  web: z.object({ athletes: z.object({ href: z.string() }) }),
                  mobile: z.object({
                    athletes: z.object({ href: z.string() }),
                  }),
                }),
              }),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              topicId: z.number(),
              type: z.string(),
              sportId: z.number(),
              uid: z.string(),
              createDate: z.string(),
            }),
            z.object({
              type: z.string(),
              guid: z.string(),
              createDate: z.string(),
            }),
          ])
        ),
        headline: z.string(),
        images: z.array(
          z.object({
            dataSourceIdentifier: z.string(),
            name: z.string(),
            width: z.number(),
            alt: z.string(),
            caption: z.string(),
            id: z.number(),
            credit: z.string(),
            type: z.string(),
            url: z.string(),
            height: z.number(),
          })
        ),
        published: z.string(),
        lastModified: z.string(),
      }),
    ])
  ),
});
