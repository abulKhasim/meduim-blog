import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@abulkhasim/common-app"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({ type }: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: "",
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            alert("Error while signin up")
        }

    }

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            {/* {JSON.stringify(postInputs)} */}
            <div className="mb-6 w-3/4 flex justify-center items-center flex-col">
                <div className="font-extrabold text-3xl">
                    {type === "signin" ? "Login" : "Create an account"}
                </div>
                <div className="text-slate-500 pt-2">
                    {type === "signin" ? "Don't have an account?" : "Already have an account? "}
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
            </div>
            {type === "signup" ? <LabelledInput label="Name" placeholder="jack" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
            }} /> : null}
            <LabelledInput label="Email" placeholder="jack@gmail.com" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    username: e.target.value
                })
            }} />
            <LabelledInput label="Password" type="password" placeholder="123465" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }} />
            <button onClick={sendRequest} type="button" className="w-2/4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sing in"}</button>

        </div>
    )
}

interface labelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: labelledInputType) {
    return <div className="pb-4 w-2/4">
        <label className="block mb-2 text-sm font-semibold text-gray-900">{label}</label>
       <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-10 px-3" placeholder={placeholder} required />
    </div>
}