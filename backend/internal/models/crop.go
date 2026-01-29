package models

import "github.com/lib/pq"

type Crop struct {
	ID                    uint           `gorm:"primary_key" json:"id"`
	Name                  string         `json:"name"`
	Seasons               pq.StringArray `gorm:"type:text[]" json:"seasons"`
	TownRank              string         `json:"townRank"`
	GrowthTimeDay         int            `json:"growthTimeDay"`
	RegrowthTimeDay       int            `json:"regrowthTimeDay"`
	PossibleMaxHarvestDay int            `json:"possibleMaxHarvestDay"`
	ImageURL              string         `json:"imageURL"`
	SeedPrice             int            `json:"seedPrice"`
	PriceBase             int            `json:"buyPriceBase"`
	PriceBronze           int            `json:"buyPriceBronze"`
	PriceSilver           int            `json:"buyPriceSilver"`
	PriceGold             int            `json:"buyPriceGold"`
	PriceOsmium           int            `json:"buyPriceOsmium"`
}
