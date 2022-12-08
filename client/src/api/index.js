import axios from "axios";

const URL = "https://relaxfilm.onrender.com/";

//USER
export const fetchUser = (payload) => axios.post(`${URL}/users/login`, payload);
export const fetchUserById = (payload) =>
  axios.get(`${URL}/users`, {headers: {"Authorization": `Bearer ${payload}`}});
export const createUser = (payload) =>
  axios.post(`${URL}/users/register`, payload);

//films
export const fetchFilms = () => axios.get(`${URL}/films`);
export const createFilm = (payload) => axios.post(`${URL}/films/create-films`, payload);
export const getFilmsByCategory = (payload) => axios.get(`${URL}/films/get-films-by-category`, {params: {category: payload}});
export const getFilmsByName = (payload) => axios.get(`${URL}/films/get-film-by-name`, payload);
export const getFilmsByView = () => axios.get(`${URL}/films/get-film-by-view`);
export const getFilmsByLike = () => axios.get(`${URL}/films/get-film-by-like`);
export const getFilmsByDate = (payload) => axios.get(`${URL}/films/get-film-by-date`, {params: {year: payload}});
export const deleteFilm = (payload) => axios.delete(`${URL}/films/delete-film`, {params: {id: payload}});
