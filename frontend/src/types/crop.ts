export type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

export const TOWN_RANKS = [
    { label: "F", value: "F" },
    { label: "E", value: "E" },
    { label: "D", value: "D" },
    { label: "C", value: "C" },
    { label: "B", value: "B" },
    { label: "A", value: "A" },
    { label: "S", value: "S" },
] as const

export type TownRankValue = (typeof TOWN_RANKS)[number]["value"];

export interface Crop {
    id: number;
    name: string;
    seasons: Seasons
    growthTimeDay: number;
    regrowthTimeDay: number;
    possibleMaxHarvestDay: number;
    imageURL: string;
    buyPriceBase: number;
    buyPriceBronze: number;
    buyPriceSilver: number;
    buyPriceGold: number;
    buyPriceOsmium: number;
    seedPrice: number;
}