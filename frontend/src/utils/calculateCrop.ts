import { type Crop } from "@/types/crop";
import type { CalculatorInput, CalculatorOutput, CropQuality } from "@/types/calculator";


// วันคงเหลือ
const getRemainingDays = (currentDay: number, seasonLength: number = 28) => {
    return seasonLength - currentDay + 1
}

const calculateHarvestCount = (growthTime: number, regrowthTime: number, remainingDays: number) => {
    // ปลูกพืชนั้นไม่่ได้เพราะว่า วันใน season นั้นไม่พอ
    if (remainingDays < growthTime) return 0;
    // ปลูกได้ครั้งเดียว
    if (regrowthTime <= 0) return 1
    // ปลูกได้หลายครั้ง
    const daysAfterFirstHarvest = remainingDays - growthTime
    const regrowthResult = Math.floor(daysAfterFirstHarvest / regrowthTime)

    return regrowthResult + 1 // บวกครั้งแรกกับครั้งที่งอกใหม่ด้วย
}

const calculateTotalCost = (sellPrice: number, farmSize: number) => {
    return sellPrice * farmSize
}

const calculateRevenue = (pricePerItem: number, harvestCount: number, farmSize: number, yieldPerHarvest: number = 1) => {
    return pricePerItem * harvestCount * farmSize * yieldPerHarvest;
}

const helperGetPriceByQuality = (crop: Crop, quality: CropQuality) => {
    switch (quality) {
        case "Bronze":
            return crop.buyPriceBronze; // เช็คชื่อ field ใน type Crop ให้ตรงกับ DB นะครับ
        case "Silver":
            return crop.buyPriceSilver;
        case "Gold":
            return crop.buyPriceGold;
        case "Osmium":
            return crop.buyPriceOsmium;
        case "Base":
        default:
            return crop.buyPriceBase;
    }
}

const calculateProfit = (revenue: number, cost: number): number => {
    return revenue - cost;
}


// Main Calculate
const calculateCrop = (crop: Crop, input: CalculatorInput): CalculatorOutput => {
    const { currentDay, farmSize, targetQuality } = input;
    const remainingDays = getRemainingDays(currentDay)
    const harvestCount = calculateHarvestCount(crop.growthTimeDay, crop.regrowthTimeDay, remainingDays)

    // Seed Cost
    const seedCostTotal = calculateTotalCost(crop.seedPrice, farmSize)
    // Sell Price Per Item
    const sellPricePerItem = helperGetPriceByQuality(crop, targetQuality)
    // Total
    const totalRevenue = calculateRevenue(sellPricePerItem, harvestCount, farmSize)

    const netProfit = calculateProfit(totalRevenue, seedCostTotal);

    return {
        crop,
        plantCount: farmSize,
        seedCostTotal,
        growthTime: crop.growthTimeDay,
        harvestCount,
        remainingDays,
        revenuePerHarvest: sellPricePerItem * farmSize, // รายได้ต่อการเก็บ 1 รอบ
        totalRevenue,
        netProfit
    }
}

export {
    getRemainingDays,
    calculateHarvestCount,
    calculateTotalCost,
    calculateRevenue,
    calculateProfit,
    calculateCrop,
    helperGetPriceByQuality
}
