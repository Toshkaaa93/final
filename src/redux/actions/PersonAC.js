import { axiosInstance } from "../../components/config/axios";

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuerry =
  ({ email, password, cb }) =>
  async (dispatch) => {
    const response = await axiosInstance.post("signin", {
      email,
      password,
    });
    const person = responce.data;

    dispatch(
      signIn({
        ...person.data,
        token: person.token,
      })
    );

    cb && cb();
  };
