import { login } from "./utility";

const initialState = {
  userName: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function LoginPage() {
  const submitLoginForm = async (e) => {
    e.preventDefault();
    try {
      await login({ username: "test", password: "test" });
      console.log("logged in");
    } catch (error) {
      console.log("error occured" + error);
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
