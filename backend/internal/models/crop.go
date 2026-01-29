package models

type Crop struct {
	ID                 uint   `gorm:"primary_key" json:"id"`
	Name               string `json:"name"`
	Season             string `json:"season"`
	GrowthTimeDay      int    `json:"growthTimeDay"`
	ReGrowthTimeDay    int    `json:"regrowthTimeDay"`
	PossibleMaxHarvest int    `json:"possibleMaxHarvest"`
	ImageURL           string `json:"imageURL"`
	PriceBase          int    `json:"buyPriceBase"`
	PriceBronze        int    `json:"buyPriceBronze"`
	PriceSilver        int    `json:"buyPriceSilver"`
	PriceGold          int    `json:"buyPriceGold"`
	PriceOsmium        int    `json:"buyPriceOsmium"`
	SellPrice          int    `json:"sellPrice"`
	GrowthTime         int    `json:"growthTime"`
}
