import { combineReducers } from 'redux';
import user from './users';
import films from './films';
import allFilms from './allFilms';

export default combineReducers({
    user,
    films,
    allFilms,
});