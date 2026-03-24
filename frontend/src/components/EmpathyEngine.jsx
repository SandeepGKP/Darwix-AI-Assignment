import { useState } from "react";
import axios from "axios";

export default function EmpathyEngine() {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState("");

  const handleClick = async () => {
    if (!text.trim()) return;

    const res = await axios.post("http://localhost:8000/empathy/speak", {
      text: text,
    });

    console.log("Audio file :::", res.data.audio_file);

    setAudio(res.data.audio_file);
    setText("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-black p-4">Empathy Engine</h2>

      <textarea
        className="bg-gray-500 w-[70%] rounded p-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="text-white cursor-pointer m-4 rounded p-2 bg-blue-400"
        onClick={handleClick}
      >
        Generate
      </button>

      {audio && (
        <audio
          controls
          src={audio} 
        />
      )}

      <p className="text-white">
        {audio ? `${audio}` : ""}
      </p>
    </div>
  );
}