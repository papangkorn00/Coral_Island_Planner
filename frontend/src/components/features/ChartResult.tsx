import {ChartContainer, type ChartConfig} from "@/components/ui/chart"
import {Bar, BarChart} from "recharts"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "#60a5fa",
  // },
} satisfies ChartConfig

const chartData = [
  {month: "January", desktop: 186, mobile: 80},
  {month: "February", desktop: 305, mobile: 200},
  {month: "March", desktop: 237, mobile: 120},
  {month: "April", desktop: 73, mobile: 190},
  {month: "May", desktop: 209, mobile: 130},
  {month: "June", desktop: 214, mobile: 140},
]

const ChartResult = () => {
  return (
    <div className="col-span-10 md:col-span-6 col-start-2 md:col-start-4 z-10">
      <div className="bg-(--bg-section) rounded-4xl h-auto p-14">
        <ChartContainer config={chartConfig} className="w-full h-[200px] sm:h-[350px] md:h-[500px]">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  )
}

export default ChartResult
