import axios from 'axios';

const http = axios.create({
  baseURL: "/api",
});

export const getShelves = () => http.get('/shelves');
export const createShelf = (data) => http.post('/shelf', {...data});
