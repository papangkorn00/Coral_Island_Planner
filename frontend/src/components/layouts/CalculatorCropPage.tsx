// import {useState, useEffect} from "react"
// import {getCrops} from "@/services/apiService"
// import type {Crop} from "@/types/crop"

const CalculatorCropPage = () => {
  // const [crops, setCrops] = useState<Crop[]>()

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const data = await getCrops()
  //       setCrops(data)
  //     } catch (err) {
  //       console.log("failed to load crops", err)
  //     }
  //   }
  //   loadData()
  // }, [])

  return (
    <div className="relative min-h-screen bg-island-main bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg backdrop-brightness-75"></div>

      <div className="relative flex justify-center z-10 p-10">
        <h1 className="title font-coral-reef">Coral Island Planner</h1>
      </div>
    </div>
  )
}

export default CalculatorCropPage
