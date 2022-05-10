import { useReducer } from "react";
import { login } from "./utility";

const initialState = {
  userName: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};
const loginReducer = (state, action) => {
  switch (action.type) {
    case "filled": {
      return {
        //
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        error: "",
      };
    }
    case "error": {
      return {
        ...state,
        error: "Username or Password doesn't match",
        isLoggedIn: false,
        isLoading: false,
      };
    }
    case "loggedOut": {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
export default function LoginPage() {
  const [stateObject, dispatchFunction] = useReducer(
    loginReducer,
    initialState
  );
  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      await login({ username: "test1", password: "test" });
      alert("success");
    } catch (error) {
      alert("failure");
    }
  };
  return (
    <div style={{ margin: "1rem" }}>
      <form>
        <input type="text" placeholder="User Name" />
        <br />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <button style={{ margin: "1rem" }} onClick={submitLoginForm}>
          Login
        </button>
      </form>
    </div>
  );
}
