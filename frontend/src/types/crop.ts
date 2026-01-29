export type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

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