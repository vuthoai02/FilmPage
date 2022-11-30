import { combineReducers } from 'redux';
import user from './users';
import films from './films';

export default combineReducers({
    user,
    films,
});