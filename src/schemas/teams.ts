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
