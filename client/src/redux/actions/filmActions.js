import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getFilms = createActions({
  getFilmsRequest: (payload) => payload,
  getFilmsSuccess: (payload) => payload,
  getFilmsFailure: (err) => err,
});

export const createFilm = createActions({
  createFilmRequest: (payload) => payload,
  createFilmSuccess: (payload) => payload,
  createFilmFailure: (err) => err,
});

export const changeTab = createAction('CHANGETAB')

export const getFilmsByCategory = createActions({
  byCategoryRequest: (payload) => payload,
  byCategorySuccess: (payload) => payload,
  byCategoryFailure: (err) => err,
});

export const getFilmsByName = createActions({
  byNameRequest: (payload) => payload,
  byNameSuccess: (payload) => payload,
  byNameFailure: (err) => err,
});

export const getFilmsByView = createActions({
  byViewRequest: (payload) => payload,
  byViewSuccess: (payload) => payload,
  byViewFailure: (err) => err,
});

export const getFilmsByLike = createActions({
  byLikeRequest: (payload) => payload,
  byLikeSuccess: (payload) => payload,
  byLikeFailure: (err) => err,
});

export const getFilmsByDate = createActions({
  byDateRequest: (payload) => payload,
  byDateSuccess: (payload) => payload,
  byDateFailure: (err) => err,
});
