export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REG_REQUEST":
      return {
        loading: true,
      };
    case "USER_REG_SUCCESS":
      return {
        loading: false,
        success: true,
        message: action.payload,
      };
    case "USER_REG_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export const loginUser = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGING_REQUEST": {
      return {
        loading: true,
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    }
    case "LOGIN_FAILED": {
      return {
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
