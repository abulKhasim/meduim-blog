import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const navigate = useNavigate()

    const [title, setTittle] = useState("");
    const [content, setContent] = useState("");

    async function sendRequest() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        navigate(`/blog/${response.data.id}`)
    }

  return (
    <div>
      <div className="flex justify-center w-full mt-10">
        <div className="max-w-screen-lg w-full">
          <input
          onChange={(e) => {
            setTittle(e.target.value)
          }}
            type="text"
            placeholder="Title"
            className="focus:outline-none block w-full p-3 border border-gray-300 rounded-lg"
          />

          <textarea
            onChange={(e) => {
                setContent(e.target.value)
            }}
            rows={5}
            className="focus:outline-none mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          ></textarea>

          <button
            onClick={sendRequest}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 mr-5 text-center mt-2 mb-2"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
