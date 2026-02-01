import ChartResult from "../features/ChartResult"

const Title = () => {
  return (
    <div className="relative min-h-screen bg-island-main bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg backdrop-brightness-75"></div>
      <div className="grid grid-cols-12 ">
        {/* Main title */}
        <div className=" col-span-12 mx-auto z-10 p-10">
          <h1 className="title font-coral-reef">Coral Island Planner</h1>
        </div>

        <ChartResult />
      </div>
    </div>
  )
}

export default Title
