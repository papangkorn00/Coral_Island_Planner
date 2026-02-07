import { type Crop } from "./crop";

export interface CalculatorInput {
    season: "Spring" | "Summer" | "Fall" | "Winter";
    currentDay: number;
    townRank: "F" | "E" | "D" | "C" | "B" | "A" | "S";
    farmSize: number;
    // targetQuality?: CropQuality;
}

export type CropQuality = "Base" | "Bronze" | "Silver" | "Gold" | "Osmium";

export interface CalculatorOutput {
    crop: Crop

    // Plant
    plantCount: number;
    seedCostTotal: number;

    // Time
    growthTime: number;
    harvestCount: number;
    remainingDays: number;

    // Financial
    revenuePerHarvest: number;
    totalRevenue: number;
    netProfit: number;
}

