import { request } from "./base";

export async function login({ email, password }) {
  const response = await request({
    url: "/login",
    method: "POST",

    data: {
      email: email,
      password: password,
    },
    withCredentials: true,
  });

  console.log(response);

  return response;
}

export async function signup({ username, email, password }) {
  const response = await request({
    url: "/signup",
    method: "POST",
    data: {
      username: username,
      email: email,
      password: password,
    },
    withCredentials: true,
  });

  return response;
}

export async function getUser() {
  const response = await request({
    url: "/user",
    method: "GET",
    withCredentials: true,
  });

  return response;
}

export async function Logout() {
  const response = await request({
    url: "/logout",
    method: "POST",
    withCredentials: true,
  });

  return response;
}
