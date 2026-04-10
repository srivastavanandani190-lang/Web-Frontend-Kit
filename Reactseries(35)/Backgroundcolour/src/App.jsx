import { useState } from "react"

function App() {
  const [color, setColor] = useState("DarkSeaGreen")

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex items-center justify-center"
        style={{ backgroundColor: color }}
      ><h1 style={{ color: "black", textShadow: "2px 2px 4px rgba(255, 255, 255, 0.83)" }}>Background Color Changer</h1>
        <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
          <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-black px-4 py-3 rounded-3xl">
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("DarkSeaGreen")} style={{ backgroundColor: "DarkSeaGreen" }}>Dark Sea Green</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("teal")} style={{ backgroundColor: "teal" }}>Teal</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("RosyBrown")} style={{ backgroundColor: "RosyBrown" }}>Rosy Brown</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("Khaki")} style={{ backgroundColor: "Khaki" }}>Khaki</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("Thistle")} style={{ backgroundColor: "Thistle" }}>Thistle</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("DarkBlue")} style={{ backgroundColor: "DarkBlue" }}>Dark Blue</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("MistyRose")} style={{ backgroundColor: "MistyRose" }}>Misty Rose</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>Purple</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("gray")} style={{ backgroundColor: "gray" }}>Gray</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("black")} style={{ backgroundColor: "black" }}>Black</button>
            <button className="px-4 py-1 rounded-full text-black shadow-lg border" onClick={() => setColor("white")} style={{ backgroundColor: "white" }}>White</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}>Orange</button>
            <button className="px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("pink")} style={{ backgroundColor: "pink" }}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App