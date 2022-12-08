import { INIT_STATE } from "../../constant";
import {
  getFilms,
  getType
} from "../actions/filmActions";

export default function allFilmsReducers(state = INIT_STATE.allFilms, action) {
  switch (action.type) {
    case getType(getFilms.getFilmsFailure):
      return state;
    case getType(getFilms.getFilmsRequest):
      return state;
    case getType(getFilms.getFilmsSuccess):
      return action.payload;
    default:
      return state;
  }
}
