import Title from "@/components/layouts/Title"
import ChartResult from "@/components/features/ChartResult"
import InputCrop from "@/components/features/InputCrop"

const CalculatorCropPage = () => {
  return (
    <div className="relative min-h-screen bg-island-main bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg backdrop-brightness-75"></div>
      <div className="grid grid-cols-12">
        <Title />

        <ChartResult />
        <InputCrop />
      </div>
    </div>
  )
}

export default CalculatorCropPage
