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

export async function createQuote({
  createdAt,
  nameInsured,
  companyAddress,
  classCode,
  exposureAmount,
}) {
  const response = await request({
    url: "/quote",
    method: "POST",
    data: {
      createdAt: createdAt,
      nameInsured: nameInsured,
      companyAddress: companyAddress,
      classCode: classCode,
      exposureAmount: exposureAmount,
    },
    withCredentials: true,
  });

  return response;
}

export async function quoteHistory() {
  const response = await request({
    url: "/quotes",
    method: "GET",
    withCredentials: true,
  });

  return response;
}

export async function quoteDetails(quoteId) {
  const response = await request({
    url: `/get-quote/${quoteId}`,
    method: "GET",
    withCredentials: true,
  });

  return response;
}

export async function updateQuote({
  quoteId,
  nameInsured,
  companyAddress,
  classCode,
  exposureAmount,
}) {
  const response = await request({
    url: `edit-quotes/${quoteId}`,
    method: "PUT",
    data: {
      nameInsured: nameInsured,
      companyAddress: companyAddress,
      classCode: classCode,
      exposureAmount: exposureAmount,
    },
    withCredentials: true,
  });

  return response;
}

export async function updateStatus({ quoteId, status }) {
  const response = await request({
    url: `/update-status/${quoteId}`,
    method: "PATCH",
    data: {
      status: status,
    },
    withCredentials: true,
  });

  return response;
}
