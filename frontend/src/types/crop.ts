export type Season = "Spring" | "Summer" | "Fall" | "Winter";

export interface Crop {
    id: number;
    name: string;
    season: Season
    growthTimeDay: number;
    possibleMaxHarvest: number;
    imageURL: string;
    buyPriceBase: number;
    buyPriceBronze: number;
    buyPriceSilver: number;
    buyPriceGold: number;
    buyPriceOsmium: number;
    sellPrice: number;
    growthTime: number;
}