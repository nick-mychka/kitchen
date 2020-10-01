import axios from 'axios';

const http = axios.create({
  baseURL: "/api",
});

export const getShelves = () => http.get('/shelves');
export const createShelf = (data) => http.post('/shelf', {...data});
export const deleteShelf = (id) => http.delete(`/shelf/${id}`);
export const updateShelf = (data) => http.put(`/shelf/${data.id}`, data);
