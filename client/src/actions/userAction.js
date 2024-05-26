import axios from "axios";
export const useRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REG_REQUEST" });
  try {
    const res = await axios.post("http://localhost:8081/users/register", user);
    dispatch({ type: "USER_REG_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "USER_REG_FAILED", payload: error });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGING_REQUEST" });
  const responce = await axios.post("http://localhost:8081/users/login", user);
  if (responce.data.status == "ok") {
    dispatch({ type: "LOGIN_SUCCESS", payload: responce.data.user });
    localStorage.setItem("currentUser", JSON.stringify(responce.data.user));
  } else {
    dispatch({ type: "LOGIN_FAILED", payload: responce.data.error });
  }
};

export const logoutUSer = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
