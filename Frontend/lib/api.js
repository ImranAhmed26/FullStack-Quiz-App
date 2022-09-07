import axios from "axios";

const baseUrl = "http://localhost:4000/api";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const getQueryString = (query = {}) => {
  let queryString = "?";
  for (let key in query) {
    queryString = `${queryString}&${key}=${query[key]}`;
  }
  return queryString;
};

const handleError = (error) => {
  const { data, status } = error?.response || {};
  if (status === 401) {
    // redirectToLogin();
    console.log(error);
  }
  return { data, status };
};

export const GET = async (route = "", query = {}) => {
  try {
    const queryString = getQueryString(query);
    const apiRoute = `${baseUrl}${route}${queryString}`;
    const { data, status } = await axios.get(apiRoute, {
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const POST = async (route = "", body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.post(apiRoute, body, {
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const POSTFORM = async (route = "", formData = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.post(apiRoute, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Timezone: determine().name(),
      },
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const PUTFORM = async (route = "", formData = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.put(apiRoute, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Timezone: determine().name(),
      },
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const PATCH = async (route = "", body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.patch(apiRoute, body, {
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const PUT = async (route = "", body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.put(apiRoute, body, {
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

export const DELETE = async (route = "") => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.delete(apiRoute, {
      headers: getHeaders(),
    });
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};
