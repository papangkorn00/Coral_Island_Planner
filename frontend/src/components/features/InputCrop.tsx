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
import {ChevronDown} from "lucide-react"
import {Input} from "@/components/ui/input"
import {FieldLabel} from "@/components/ui/field"
import {useState} from "react"

const InputCrop = () => {
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
    <div className="col-span-6 col-start-4 z-10 mt-10">
      <div className="flex justify-center-safe items-center-safe tracking-wide gap-x-28 bg-(--bg-section) rounded-4xl h-24">
        {/* Town Ranks */}
        <div>
          <FieldLabel htmlFor="input-town-rank" className="font-coral-reef">
            Town Rank
          </FieldLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex justify-between w-[100px]"
              >
                {currentRank?.value}
                <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent id="input-town-rank" className="w-[100px]">
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
          <FieldLabel htmlFor="input-current-day" className="font-coral-reef">
            Season
          </FieldLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex justify-between w-[100px]">
                {currentSeason?.value}
                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent id="input-current-day" className="w-[100px]">
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
          <FieldLabel htmlFor="input-current-day" className="font-coral-reef">
            Current Day
          </FieldLabel>
          <Input
            className="w-[100px] bg-white"
            id="input-current-day"
            type="number"
            defaultValue={1}
            min={1}
            max={28}
            onChange={(e) => {
              const value = e.target.value
              setInputState((prev) => ({...prev, currentDay: value}))
            }}
          ></Input>
        </div>
        {/* Farm size */}
        <div>
          <FieldLabel htmlFor="input-farm-size" className="font-coral-reef">
            Farm Size
          </FieldLabel>
          <Input
            className="w-[100px] bg-white"
            id="input-farm-size"
            type="number"
            defaultValue={1}
            min={1}
            onChange={(e) => {
              const value = e.target.value
              setInputState((prev) => ({...prev, farmSize: value}))
            }}
          ></Input>
        </div>
      </div>
    </div>
  )
}

export default InputCrop
