import express from 'express';

import * as filmsControl from '../controllers/films.js';

const router = express.Router();

router.get('/', filmsControl.getFilms);
router.get('/get-films-by-category', filmsControl.getFilmsByCategory);
router.get('/get-film-by-name', filmsControl.getFilmByName);
router.get('/get-film-by-view', filmsControl.getFilmsByView);
router.get('/get-film-by-like', filmsControl.getFilmsByLike);
router.get('/get-film-by-date', filmsControl.getFilmsByDate);
router.post('/create-films', filmsControl.createFilms);
router.post('/delete-film', filmsControl.deleteFilm);

export default router;