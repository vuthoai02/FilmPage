import { INIT_STATE } from "../../constant";
import {
  getFilms,
  getType,
  createFilm,
  getFilmsByCategory,
  getFilmsByDate,
  getFilmsByLike,
  getFilmsByName,
  getFilmsByView,
  deleteFilm
} from "../actions/filmActions";

export default function filmsReducers(state = INIT_STATE.films, action) {
  switch (action.type) {
    case getType(createFilm.createFilmFailure):
    case getType(getFilms.getFilmsFailure):
    case getType(getFilmsByCategory.byCategoryFailure):
    case getType(getFilmsByName.byNameFailure):
    case getType(getFilmsByView.byViewFailure):
    case getType(getFilmsByLike.byLikeFailure):
    case getType(getFilmsByDate.byDateFailure):
    case getType(deleteFilm.deleteFilmFailure):
      return state;
    case getType(createFilm.createFilmRequest):
    case getType(getFilms.getFilmsRequest):
    case getType(getFilmsByCategory.byCategoryRequest):
    case getType(getFilmsByName.byNameRequest):
    case getType(getFilmsByView.byViewRequest):
    case getType(getFilmsByLike.byLikeRequest):
    case getType(getFilmsByDate.byDateRequest):
    case getType(deleteFilm.deleteFilmRequest):
      return {
        isLoading: true,
        ...state,
      };
    case getType(getFilms.getFilmsSuccess):
      return {
        isLoading: false,
        data: action.payload,
        currentFilm: state.currentFilm,
      };
    case getType(createFilm.createFilmSuccess):
      return {
        currentFilm: state.currentFilm,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case getType(getFilmsByCategory.byCategorySuccess):
    case getType(getFilmsByName.byNameSuccess):
    case getType(getFilmsByView.byViewSuccess):
    case getType(getFilmsByLike.byLikeSuccess):
    case getType(getFilmsByDate.byDateSuccess):
      return {
        isLoading: false,
        currentFilm: null,
        data: action.payload,
      };
    case getType(deleteFilm.deleteFilmSuccess):
      return {
        isLoading: false,
        currentFilm: null,
        data: [...state.data.filter((elm) => elm.id !== action.payload)],
      };
    default:
      return state;
  }
}
