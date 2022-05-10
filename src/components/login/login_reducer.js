export const loginReducer = (state, action) => {
  switch (action.type) {
    case "buttonTapped": {
      return {
        ...state,
        isLoading: true,
      };
    }
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
