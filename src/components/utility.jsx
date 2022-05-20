import axios from "axios";

export const login = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/v1/users/post",
          {
            username: username,
            password: password,
          }
        );
        resolve(res.data);
      } catch (e) {
        console.log(e);
        reject(e.name);
      }
    }, 1000);
    // setTimeout(() => {
    //   if (username === "test" && password === "test") {
    //     resolve("logged in");
    //   } else {
    //     reject("Unable to login");
    //   }
    // }, 1000);
  });
};
