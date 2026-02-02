import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SEASON,
  TOWN_RANKS,
  type SeasonValue,
  type TownRankValue,
} from "@/types/crop"
import {Input} from "../ui/input"

import {ChevronDown} from "lucide-react"
import {useState} from "react"

const InputCrop = () => {
  // const [selectedRank, setSelectedRank] = useState<TownRankValue>("F")
  // const [selectedSeason, setSelectedSeason] = useState<SeasonValue>("Spring")

  // const currentRank = TOWN_RANKS.find((rank) => rank.value === selectedRank)
  // const currentSeason = SEASON.find((season) => season.value === selectedSeason)

  const [inputState, setInputState] = useState({
    selectedRank: "F" as TownRankValue,
    selectedSeason: "Spring" as SeasonValue,
    currentDay: "",
    farmSize: "",
  })
  const currentRank = TOWN_RANKS.find(
    (rank) => rank.value === inputState.selectedRank,
  )
  const currentSeason = SEASON.find(
    (season) => season.value === inputState.selectedSeason,
  )

  return (
    <div className="col-span-6 col-start-4 z-10 mt-12">
      <div className="bg-(--bg-section) rounded-4xl h-24">
        <div className="flex  justify-center-safe items-center-safe gap-x-28">
          {/* Town Ranks */}
          <div className="flex flex-col w-[200px]">
            <label className="">Town Rank</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex justify-between">
                  {currentRank?.value}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[150px]">
                {TOWN_RANKS.map((rank) => (
                  <DropdownMenuItem
                    key={rank.value}
                    onSelect={() =>
                      setInputState((prev) => ({
                        ...prev,
                        selectedRank: rank.value,
                      }))
                    }
                  >
                    {rank.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Season */}
          <div>
            <label className="">Season</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex justify-between w-full"
                >
                  {currentSeason?.value}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                {SEASON.map((season) => (
                  <DropdownMenuItem
                    key={season.value}
                    onSelect={() =>
                      setInputState((prev) => ({
                        ...prev,
                        selectedSeason: season.value,
                      }))
                    }
                  >
                    {season.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Current Day */}
          <div>
            <label htmlFor="currentDay" className="">Current Day</label>
            <Input
              id="currentDay"
              type="number"
              aria-label="Current day (0-28)"
              placeholder="Enter your current day"
              min={0}
              max={28}
              onChange={(e) => {
                const value = e.target.value
                setInputState((prev) => ({...prev, currentDay: value}))
              }}
            ></Input>
          </div>
          {/* Farm size */}
          <div>
            <label htmlFor="farmSize" className="">Farm Size</label>
            <Input
              id="farmSize"
              type="number"
              aria-label="Farm Size"
              placeholder="Enter your farm size"
              min={0}
              onChange={(e) => {
                const value = e.target.value
                setInputState((prev) => ({...prev, farmSize: value}))
              }}
            ></Input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCrop
