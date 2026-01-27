import {useState, useEffect} from "react"
import {getCrops} from "@/services/apiService"
import type {Crop} from "@/types/crop"

const CalculatorCropPage = () => {

  const [crops, setCrops] = useState<Crop[]>()

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCrops()
        setCrops(data)
      } catch (err) {
        console.log("failed to load crops", err)
      }
    }
    loadData()
  }, [])

  return (
    <div>
      {crops?.map((c) => (
        <div>
          {c.id}: {c.name}
        </div>
      ))}
    </div>
  )
}

export default CalculatorCropPage
