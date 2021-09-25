import axios from "axios";
import { getToken } from "../auth";

export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT";

export const getPosts = async (setPosts) => {
  try {
    const token = getToken();
    const { data } = await axios.get(`${BASE_URL}/posts`, {
      headers: {
        "auth-token": token,
      },
    });
    setPosts(data.data.posts)
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = async (username, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {
      user: {
        username: username,
        password: password,
      },
    });

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const registerUser = async (username, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/register`, {
      user: {
        username,
        password,
      },
    });

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const addPost = async (
  title,
  description,
  price,
  location,
  willDeliver
) => {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${BASE_URL}/posts`,
      {
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return description;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUser = async () => {
  const token = getToken();

  try {
    const { data } = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
