import FormField from "../reusables/form_field";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";

import ClipLoader from "react-spinners/ClipLoader";
import { useReducer } from "react";
import { loginReducer } from "./login_reducer";
import { login } from "../utility";
const initialState = {
  userName: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};
export default function LoginPage() {
  const [stateObject, dispatchFunction] = useReducer(
    loginReducer,
    initialState
  );
  const { userName, password, error, isLoading } = stateObject;
  const submitLoginForm = async (e) => {
    e.preventDefault();
    dispatchFunction({ type: "buttonTapped" });
    try {
      await login({
        username: stateObject.userName,
        password: stateObject.password,
      });
      dispatchFunction({
        type: "success",
      });
      window.open("/dashboard", "_self");
    } catch (error) {
      //
      dispatchFunction({ type: "error" });
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-1/3 h-[50%] self-center bg-glass backdrop-blur rounded-2xl shadow-shadow-color shadow-lg  px-8 py-12">
        <h1 className="font-bold text-primary text-2xl mb-8">
          Login to continue
        </h1>
        {error !== "" && <h2 className="text-red-600 mt-0 mb-2">{error}</h2>}
        <FormField
          title="Email"
          icon={MailIcon}
          value={userName}
          onChange={(e) =>
            dispatchFunction({
              type: "filled",
              fieldname: "userName",
              payload: e.currentTarget.value,
            })
          }
        />
        <FormField
          title="Password"
          icon={LockClosedIcon}
          type="password"
          value={password}
          onChange={(e) =>
            dispatchFunction({
              type: "filled",
              fieldname: "password",
              payload: e.currentTarget.value,
            })
          }
        />
        {isLoading ? (
          <ClipLoader color="#4682B4" loading={true} />
        ) : (
          <button
            className="bg-primary text-white px-12 py-1.5 mt-4 text-2xl rounded-lg"
            onClick={submitLoginForm}
          >
            Login
          </button>
        )}{" "}
      </div>
    </div>
  );
}
