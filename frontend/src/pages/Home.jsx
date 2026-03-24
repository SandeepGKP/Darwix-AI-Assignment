import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        
      </h1>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-lg">

          {/* HEADER */}
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left">Description</th>

            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            <tr className="border-b">
              <td className="p-4 font-semibold"> Empathy Engine</td>
              <td className="p-4 text-gray-600">
                Generate human-like emotional responses
              </td>
    
            </tr>

            <tr className="border-b">
              <td className="p-4 font-semibold"> Pitch Visualizer</td>
              <td className="p-4 text-gray-600">
                Convert pitch into visual storytelling
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold"> Fast API</td>
              <td className="p-4 text-gray-600">
                Backend powered by FastAPI for speed
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}