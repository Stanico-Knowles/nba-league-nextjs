import { z } from "zod";

export const Roster = z.object({
  timestamp: z.string(),
  status: z.string(),
  season: z.object({
    year: z.number(),
    displayName: z.string(),
    type: z.number(),
    name: z.string(),
  }),
  athletes: z.array(
    z.object({
      id: z.string(),
      uid: z.string(),
      guid: z.string(),
      alternateIds: z.object({ sdr: z.string() }),
      firstName: z.string(),
      lastName: z.string(),
      fullName: z.string(),
      displayName: z.string(),
      shortName: z.string(),
      weight: z.number(),
      displayWeight: z.string(),
      height: z.number(),
      displayHeight: z.string(),
      age: z.number(),
      dateOfBirth: z.string(),
      debutYear: z.number(),
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
      birthPlace: z.object({
        city: z.string(),
        state: z.string(),
        country: z.string(),
      }),
      college: z.object({
        id: z.string(),
        mascot: z.string(),
        name: z.string(),
        shortName: z.string(),
        abbrev: z.string(),
      }),
      slug: z.string(),
      headshot: z.object({ href: z.string(), alt: z.string() }),
      jersey: z.string(),
      position: z.object({
        id: z.string(),
        name: z.string(),
        displayName: z.string(),
        abbreviation: z.string(),
        leaf: z.boolean(),
      }),
      injuries: z.array(z.object({ status: z.string(), date: z.string() })),
      teams: z.array(z.object({ $ref: z.string() })),
      contracts: z.array(
        z.object({
          salary: z.number(),
          season: z.object({
            year: z.number(),
            startDate: z.string(),
            endDate: z.string(),
          }),
        })
      ),
      experience: z.object({ years: z.number() }),
      contract: z.object({
        birdStatus: z.number(),
        baseYearCompensation: z.object({ active: z.boolean() }),
        poisonPillProvision: z.object({ active: z.boolean() }),
        incomingTradeValue: z.number(),
        outgoingTradeValue: z.number(),
        minimumSalaryException: z.boolean(),
        optionType: z.number(),
        salary: z.number(),
        salaryRemaining: z.number(),
        yearsRemaining: z.number(),
        season: z.object({
          year: z.number(),
          startDate: z.string(),
          endDate: z.string(),
        }),
        tradeKicker: z.object({
          active: z.boolean(),
          percentage: z.number(),
          value: z.number(),
          tradeValue: z.number(),
        }),
        tradeRestriction: z.boolean(),
        unsignedForeignPick: z.boolean(),
        active: z.boolean(),
      }),
      status: z.object({
        id: z.string(),
        name: z.string(),
        type: z.string(),
        abbreviation: z.string(),
      }),
    })
  ),
  coach: z.array(
    z.object({
      id: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      experience: z.number(),
    })
  ),
  team: z.object({
    id: z.string(),
    abbreviation: z.string(),
    location: z.string(),
    name: z.string(),
    displayName: z.string(),
    clubhouse: z.string(),
    color: z.string(),
    logo: z.string(),
    recordSummary: z.string(),
    seasonSummary: z.string(),
    standingSummary: z.string(),
  }),
});
