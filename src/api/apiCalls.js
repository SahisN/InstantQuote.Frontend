import { request } from "./base";

export async function login() {
  const response = await request({
    url: "/login",
    method: "POST",
  });

  console.log(response);

  return response;
}
