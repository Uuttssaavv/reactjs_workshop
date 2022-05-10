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
        ...state,
        [action.fieldname]: action.payload,
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

  const { username, password, isLoggedIn, error } = stateObject;
  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      await login({
        username: stateObject.userName,
        password: stateObject.password,
      });
      dispatchFunction({
        type: "success",
      });
    } catch (error) {
      //
      dispatchFunction({ type: "error" });
    }
  };
  return (
    <div style={{ margin: "1rem" }}>
      {error !== "" ? (
        <h2>Error occured {stateObject.error}</h2>
      ) : isLoggedIn ? (
        <h2>Login successful</h2>
      ) : (
        <form>
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) =>
              dispatchFunction({
                type: "filled",
                fieldname: "userName",
                payload: e.currentTarget.value,
              })
            }
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              dispatchFunction({
                type: "filled",
                fieldname: "password",
                payload: e.currentTarget.value,
              })
            }
          />
          <br />
          <button style={{ margin: "1rem" }} onClick={submitLoginForm}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}
