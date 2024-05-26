export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return {
        loading: true,
      };
    case "USER_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };
    case "USER_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
