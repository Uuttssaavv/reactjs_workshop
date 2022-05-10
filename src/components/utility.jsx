export const login = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "test") {
        resolve("logged in");
      } else {
        reject("Unable to login");
      }
    }, 1000);
  });
};
