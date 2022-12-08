/* eslint-disable react-hooks/rules-of-hooks */
import { takeLatest, call, put } from "redux-saga/effects";
import * as userActions from "../actions/userActions";
import * as filmActions from "../actions/filmActions";
import * as api from "../../api";
import { NotificationManager } from "react-notifications";

function* fetchUserByIdSaga(action) {
  try {
    const user = yield call(api.fetchUserById, action.payload);
    yield put(userActions.getUserById.getUserByIdSuccess(user.data.data));
  } catch (error) {
    yield put(userActions.getUserById.getUserByIdFailure(error));
    console.log(error);
    NotificationManager.error("", "Đăng nhập không thành công!", 3000);
  }
}

function* fetchUserSaga(action) {
  try {
    const user = yield call(api.fetchUser, action.payload);
    yield put(userActions.getUser.getUserSuccess(user.data.data));
    NotificationManager.success("", user.data.message, 3000);
    console.log(user);
    localStorage.setItem(
      "user",
      JSON.stringify({
        accessToken: user.data?.accessToken,
        role: user.data?.data.role,
        userId: user.data?.data._id,
      })
    );
    window.location.href = "/";
  } catch (error) {
    yield put(userActions.getUser.getUserFailure(error));
    NotificationManager.error("", "Đăng nhập không thành công!", 3000);
  }
}

function* createUserSaga(action) {
  try {
    const user = yield call(api.createUser, action.payload);
    yield put(userActions.createUser.createUserSuccess(user.data));
    NotificationManager.success("", user.data.message, 3000);
  } catch (error) {
    NotificationManager.error("", error.response.data.message, 3000);
    yield put(userActions.createUser.createUserFailure(error));
  }
}

function* fetchFilmsSaga(action) {
  try {
    const films = yield call(api.fetchFilms, action.payload);
    yield put(filmActions.getFilms.getFilmsSuccess(films.data.data));
  } catch (error) {
    yield put(filmActions.getFilms.getFilmsFailure(error));
    NotificationManager.error("", "Lỗi hệ thống!", 3000);
  }
}

function* getFilmsByCategorySaga(action) {
  try {
    const films = yield call(api.getFilmsByCategory, action.payload);
    yield put(filmActions.getFilmsByCategory.byCategorySuccess(films.data.data));
  } catch (error) {
    yield put(filmActions.getFilmsByCategory.byCategoryFailure(error));
    NotificationManager.error("", "Lỗi hệ thống!", 3000);
  }
}
function* getFilmsByNameSaga(action) {
  try {
    const films = yield call(api.getFilmsByName, action.payload);
    yield put(filmActions.getFilmsByName.byNameSuccess(films.data.data));
  } catch (error) {
    yield put(filmActions.getFilmsByView.byViewdFailure(error));
    NotificationManager.error("", "Lỗi hệ thống!", 3000);
  }
}
function* getFilmsByViewSaga(action) {
  try {
    const films = yield call(api.getFilmsByView, action.payload);
    yield put(filmActions.getFilmsByView.byViewSuccess(films.data.data));
  } catch (error) {
    yield put(filmActions.getFilmsByView.byViewFailure(error));
    NotificationManager.error("", "Lỗi hệ thống!", 3000);
  }
}
function* getFilmsByLikeSaga(action) {
  try {
    const films = yield call(api.getFilmsByLike, action.payload);
    yield put(filmActions.getFilmsByLike.byLikeSuccess(films.data.data));
  } catch (error) {
    yield put(filmActions.getFilmsByLike.byLikeFailure(error));
    NotificationManager.error("", "Lỗi hệ thống!", 3000);
  }
}
function* getFilmsByDateSaga(action) {
  try {
    const films = yield call(api.getFilmsByDate, action.payload);
    yield put(filmActions.getFilmsByDate.byDateSuccess(films.data.data));
  } catch (error) {
    yield put(filmActions.getFilmsByDate.byDateFailure(error));
    NotificationManager.error("", "Lỗi hệ thống!", 3000);
  }
}

function* createFilmSaga(action) {
  try {
    const film = yield call(api.createFilm, action.payload);
    yield put(filmActions.createFilm.createFilmSuccess(film.data));
    NotificationManager.success("", film.data.message, 3000);
  } catch (error) {
    NotificationManager.error("", error.response.data.message, 3000);
    yield put(filmActions.createFilm.createUserFailure(error));
  }
}

function* deleteFilmSaga(action) {
  try {
    const film = yield call(api.deleteFilm, action.payload);
    yield put(filmActions.deleteFilm.deleteFilmSuccess(film.data));
    NotificationManager.success("", film.data.message, 3000);
  } catch (error) {
    NotificationManager.error("", error.response.data.message, 3000);
    yield put(filmActions.deleteFilm.deleteFilmFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(
    userActions.getUserById.getUserByIdRequest,
    fetchUserByIdSaga
  );
  yield takeLatest(userActions.getUser.getUserRequest, fetchUserSaga);
  yield takeLatest(userActions.createUser.createUserRequest, createUserSaga);
  yield takeLatest(filmActions.getFilms.getFilmsRequest, fetchFilmsSaga);
  yield takeLatest(filmActions.createFilm.createFilmRequest, createFilmSaga);
  yield takeLatest(filmActions.getFilmsByCategory.byCategoryRequest, getFilmsByCategorySaga);
  yield takeLatest(filmActions.getFilmsByName.byNameRequest, getFilmsByNameSaga);
  yield takeLatest(filmActions.getFilmsByView.byViewRequest, getFilmsByViewSaga);
  yield takeLatest(filmActions.getFilmsByLike.byLikeRequest, getFilmsByLikeSaga);
  yield takeLatest(filmActions.getFilmsByDate.byDateRequest, getFilmsByDateSaga);
  yield takeLatest(filmActions.deleteFilm.deleteFilmRequest, deleteFilmSaga);
}

export default mySaga;
