import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getAuthToken = () => {
  const tokenObject = localStorage.getItem("token");
  const jwt = JSON.parse(tokenObject).token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${jwt}`,
    },
  };
  return config;
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

export const fetchUserAccountData = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/account`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch account data");
  }
};
