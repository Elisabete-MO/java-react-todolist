import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PORT = process.env.REACT_APP_API_PORT || 8080;

const fetch = axios.create({
  baseURL: `http://${HOST}:${PORT}/tasks`,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const requestApi = async (method, endpoint, body) => {
  try {
    const response = await fetch
      .request({ method, url: endpoint, data: body })
    return { status: response.status, data: response.data };
  } catch (error) {
    return { status: 500, data: { error: 'I`m not a Teapot' } };
  }
}

export default requestApi


// import axios from 'axios';

//const requestAPI = async () => {
//  try {
//    const request = await fetch('http://localhost:8080/tasks');
//    const { results } = await request.json();
//    return results;
//  } catch (error) {
//    throw new Error(error.message);
//  }
//};
//
//export default requestAPI;
