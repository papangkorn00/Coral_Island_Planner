import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {TOWN_RANKS, type TownRankValue} from "@/types/crop"

import {ChevronDown} from "lucide-react"
import {useState} from "react"

const InputCrop = () => {
  const [selectedRank, setSelectedRank] = useState<TownRankValue>("F")

  const currentRank = TOWN_RANKS.find((re) => re.value === selectedRank)

  return (
    <div className="col-span-6 col-start-4 z-10 mt-12">
      <div className="bg-(--bg-section) rounded-4xl h-40">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 w-[200px]">
            <h4 className="">Town Rank</h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex justify-between w-full"
                >
                  {currentRank?.value}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                {TOWN_RANKS.map((rank) => (
                  <DropdownMenuItem
                    key={rank.value}
                    onSelect={() => setSelectedRank(rank.value)}
                  >
                    {rank.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <h4 className="">Season</h4>
          </div>
          <div>
            <h4 className="">Current Day</h4>
          </div>
          <div>
            <h4 className="">Farm Size</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCrop
