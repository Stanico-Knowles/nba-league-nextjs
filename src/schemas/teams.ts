import { z } from "zod";

export const Teams = z.object({
  sports: z.array(
    z.object({
      id: z.string(),
      uid: z.string(),
      name: z.string(),
      slug: z.string(),
      leagues: z.array(
        z.object({
          id: z.string(),
          uid: z.string(),
          name: z.string(),
          abbreviation: z.string(),
          shortName: z.string(),
          slug: z.string(),
          teams: z.array(
            z.object({
              team: z.object({
                id: z.string(),
                uid: z.string(),
                slug: z.string(),
                abbreviation: z.string(),
                displayName: z.string(),
                shortDisplayName: z.string(),
                name: z.string(),
                nickname: z.string(),
                location: z.string(),
                color: z.string(),
                alternateColor: z.string(),
                isActive: z.boolean(),
                isAllStar: z.boolean(),
                logos: z.array(
                  z.object({
                    href: z.string(),
                    alt: z.string(),
                    rel: z.array(z.string()),
                    width: z.number(),
                    height: z.number(),
                  })
                ),
                links: z.array(
                  z.object({
                    language: z.string(),
                    rel: z.array(z.string()),
                    href: z.string(),
                    text: z.string(),
                    shortText: z.string(),
                    isExternal: z.boolean(),
                    isPremium: z.boolean(),
                    isHidden: z.boolean(),
                  })
                ),
              }),
            })
          ),
          year: z.number(),
          season: z.object({ year: z.number(), displayName: z.string() }),
        })
      ),
    })
  ),
});

export const Team = z.object({
  team: z.object({
    id: z.string(),
    uid: z.string(),
    slug: z.string(),
    location: z.string(),
    name: z.string(),
    abbreviation: z.string(),
    displayName: z.string(),
    shortDisplayName: z.string(),
    color: z.string(),
    alternateColor: z.string(),
    isActive: z.boolean(),
    logos: z.array(
      z.object({
        href: z.string(),
        width: z.number(),
        height: z.number(),
        alt: z.string(),
        rel: z.array(z.string()),
        lastUpdated: z.string(),
      })
    ),
    record: z.object({
      items: z.array(
        z.object({
          description: z.string(),
          type: z.string(),
          summary: z.string(),
          stats: z.array(z.object({ name: z.string(), value: z.number() })),
        })
      ),
    }),
    groups: z.object({
      id: z.string(),
      parent: z.object({ id: z.string() }),
      isConference: z.boolean(),
    }),
    links: z.array(
      z.object({
        language: z.string(),
        rel: z.array(z.string()),
        href: z.string(),
        text: z.string(),
        shortText: z.string(),
        isExternal: z.boolean(),
        isPremium: z.boolean(),
      })
    ),
    franchise: z.object({
      $ref: z.string(),
      id: z.string(),
      uid: z.string(),
      slug: z.string(),
      location: z.string(),
      name: z.string(),
      abbreviation: z.string(),
      displayName: z.string(),
      shortDisplayName: z.string(),
      color: z.string(),
      isActive: z.boolean(),
      venue: z.object({
        $ref: z.string(),
        id: z.string(),
        fullName: z.string(),
        shortName: z.string(),
        address: z.object({ city: z.string(), state: z.string() }),
        capacity: z.number(),
        grass: z.boolean(),
        indoor: z.boolean(),
        images: z.array(
          z.object({
            href: z.string(),
            width: z.number(),
            height: z.number(),
            alt: z.string(),
            rel: z.array(z.string()),
          })
        ),
      }),
      team: z.object({ $ref: z.string() }),
    }),
    nextEvent: z.array(
      z.object({
        id: z.string(),
        date: z.string(),
        name: z.string(),
        shortName: z.string(),
        season: z.object({ year: z.number(), displayName: z.string() }),
        seasonType: z.object({
          id: z.string(),
          type: z.number(),
          name: z.string(),
          abbreviation: z.string(),
        }),
        timeValid: z.boolean(),
        competitions: z.array(
          z.object({
            id: z.string(),
            date: z.string(),
            attendance: z.number(),
            type: z.object({
              id: z.string(),
              text: z.string(),
              abbreviation: z.string(),
              slug: z.string(),
              type: z.string(),
            }),
            timeValid: z.boolean(),
            neutralSite: z.boolean(),
            boxscoreAvailable: z.boolean(),
            ticketsAvailable: z.boolean(),
            venue: z.object({
              fullName: z.string(),
              address: z.object({ city: z.string(), state: z.string() }),
            }),
            competitors: z.array(
              z.object({
                id: z.string(),
                type: z.string(),
                order: z.number(),
                homeAway: z.string(),
                team: z.object({
                  id: z.string(),
                  location: z.string(),
                  abbreviation: z.string(),
                  displayName: z.string(),
                  shortDisplayName: z.string(),
                  logos: z.array(
                    z.object({
                      href: z.string(),
                      width: z.number(),
                      height: z.number(),
                      alt: z.string(),
                      rel: z.array(z.string()),
                      lastUpdated: z.string(),
                    })
                  ),
                  links: z.array(
                    z.object({
                      rel: z.array(z.string()),
                      href: z.string(),
                      text: z.string(),
                    })
                  ),
                }),
              })
            ),
            notes: z.array(z.unknown()),
            broadcasts: z.array(
              z.object({
                type: z.object({ id: z.string(), shortName: z.string() }),
                market: z.object({ id: z.string(), type: z.string() }),
                media: z.object({ shortName: z.string() }),
                lang: z.string(),
                region: z.string(),
              })
            ),
            tickets: z.array(
              z.object({
                id: z.string(),
                summary: z.string(),
                description: z.string(),
                maxPrice: z.number(),
                startingPrice: z.number(),
                numberAvailable: z.number(),
                totalPostings: z.number(),
                links: z.array(
                  z.object({ rel: z.array(z.string()), href: z.string() })
                ),
              })
            ),
            status: z.object({
              clock: z.number(),
              displayClock: z.string(),
              period: z.number(),
              type: z.object({
                id: z.string(),
                name: z.string(),
                state: z.string(),
                completed: z.boolean(),
                description: z.string(),
                detail: z.string(),
                shortDetail: z.string(),
              }),
            }),
          })
        ),
        links: z.array(
          z.object({
            language: z.string(),
            rel: z.array(z.string()),
            href: z.string(),
            text: z.string(),
            shortText: z.string(),
            isExternal: z.boolean(),
            isPremium: z.boolean(),
          })
        ),
      })
    ),
    standingSummary: z.string(),
  }),
});