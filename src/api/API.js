import axios from "axios";

import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";

export const fetchMovies = async (searchTerm, page) => {
  const endpoint = searchTerm
    ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  return await axios.get(endpoint).then((res) => res.data);
};

export const fetchMovie = async (movieId) => {
  const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
  return await axios.get(endpoint).then((res) => res.data);
};

export const fetchCredits = async (movieId) => {
  const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  return await axios.get(creditsEndpoint).then((res) => res.data);
};

// Bonus material below for login
export const getRequestToken = async () => {
  const reqToken = await axios.get(REQUEST_TOKEN_URL).then((res) => res.data);
  return reqToken.request_token;
};

export const authenticate = async (requestToken, username, password) => {
  const bodyData = {
    username,
    password,
    request_token: requestToken,
  };
  // First authenticate the requestToken
  const data = await axios.post(LOGIN_URL, bodyData).then((res) => res.data);

  // Then get the sessionId with the requestToken
  if (data.success) {
    const sessionId = await axios
      .post(SESSION_ID_URL, { request_token: requestToken })
      .then((res) => res.data);

    return sessionId;
  }
};

export const rateMovie = async (sessionId, movieId, value) => {
  const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
  const rating = await axios.post(endpoint, { value }).then((res) => res.data);

  return rating;
};
