import { useState } from "react";
import { generateStoryboard } from "../services/api";

export default function PitchVisualizer() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleClick = async () => {
    try {
      const res = await generateStoryboard(text);
      setData(res.data.storyboard);
      if (res.status === 409) {
        // Handle quota exceeded
        alert("Too many requests or quota exceeded. Please try again later.");
        return;
      }

    } catch (error) {
      console.error("Error generating storyboard:", error);
      alert("Something went wrong . Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h2 className="text-black p-4">Pitch Visualizer </h2>

      <textarea className="bg-gray-400 w-[80%] rounded p-1" onChange={(e) => setText(e.target.value)} />

      <button className="text-white cursor-pointer bg-blue-400 m-4 rounded p-2" onClick={handleClick}>Generate</button>

      <div>
        {data.map((item, i) => (
          <div key={i}>
            {/* ✅ USE DIRECT URL */}
            <img src={item.image} width="300" />

            {/* ✅ FIX FIELD NAME */}
            <p className="text-white">{item.scene}</p>
          </div>
        ))}
      </div>
    </div>
  );
}