import { data } from "react-router-dom";
import { request } from "./base";

export async function login({ email, password }) {
  const response = await request({
    url: "/login",
    method: "POST",
    data: {
      email: email,
      password: password,
    },
  });

  console.log(response);

  return response;
}
