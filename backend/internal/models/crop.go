package models

type Crop struct {
	ID                 uint   `gorm:"primary_key" json:"id"`
	Name               string `json:"name"`
	Season             string `json:"season"`
	GrowthTimeDay      int    `json:"growth_time_day"`
	PossibleMaxHarvest int    `json:"possible_max_harvest"`
	ImageURL           string `json:"image_url"`
	PriceBase          int    `json:"buy_price_base"`
	PriceBronze        int    `json:"buy_price_bronze"`
	PriceSilver        int    `json:"buy_price_silver"`
	PriceGold          int    `json:"buy_price_gold"`
	PriceOsmium        int    `json:"buy_price_osmium"`
	SellPrice          int    `json:"sell_price"`
	GrowthTime         int    `json:"growth_time"`
}
