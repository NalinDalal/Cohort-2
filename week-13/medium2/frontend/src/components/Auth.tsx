import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupInput } from "@nalindalal/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

//imports from common will be introduced here
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<typeof signupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signin" : "signin"}`,
        postInputs,
      );
      const jwt = response.data;
      localStorage.setItem("jwt token", jwt);
      navigate("/blogs"); //navigate user to blogs if auth passes
    } catch (err) {
      console.log(err);
      alert("Error while signing up");
      //alert user that request failed
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      {JSON.stringify(postInputs)}
      <div className="flex justify-center">
        <div>
          <div>
            <div className="text-xl font-extrabold">Create an account</div>

            <div className="text-slate-400 font-light">
              {type == "signin"
                ? "Don't have an account?"
                : "Already have an account?"}

              <Link
                className="pl-2 underline"
                to={type === "/signin" ? "/signup" : "/signin"}
              >
                Login
                <br />
                {type === "signin" ? "signup" : "signin"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type == "signup" ? (
              <LabelledInput
                title="Name"
                placeholder="Nalin..."
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}
            <LabelledInput
              title="Username"
              placeholder="nalindalal2004@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />

            <LabelledInput
              title="Password"
              type={"password"}
              placeholder="Nalin..."
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />

            {/* the one type which is taken as input as signup or signin */}

            <button
              onChange={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus: ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark: hover: bg-gray-700 dark: focus: ring-gray-700 dark: border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//27:59

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      {/* search for input box tailwind css*/}
      <label className="block mb-2 text-sm font-medium text-black">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
