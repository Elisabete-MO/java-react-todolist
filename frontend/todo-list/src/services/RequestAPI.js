import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const fetch = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const requestAPI = async (method, endpoint, body) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body && !['GET', 'DELETE'].includes(method.toUpperCase())) {
      options.data = body;
    }

    const response = await fetch(endpoint, options);

    if (!response.status >= 200 && response.status < 300) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return { status: response.status, data: response.data };
  } catch (error) {
    return { status: 500, data: { error: 'I`m not a Teapot' } };
  }
}

export default requestAPI;
