import { FilmModel } from "../models/FilmModel.js";

export const getFilms = async (req, res) => {
  try {
    const films = await FilmModel.find();
    return res
      .status(200)
      .json({ success: true, message: "Done!", data: films });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Lỗi hệ thống!" });
  }
};

export const getFilmsByCategory = async (req, res) => {
  const category = req.query.category;
  console.log(category);
  try {
    const films = await FilmModel.find({category: category});
    console.log(films)
    return res
      .status(200)
      .json({ success: true, message: "Done!!", data: films });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Lỗi hệ thống!" });
  }
};

export const getFilmsByView = async (req, res) => {
  try {
    const films = await FilmModel.find();
    return res.status(200).json({
      success: true,
      message: "Done!!",
      data: films.sort((a, b) => b.totalView - a.totalView),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Lỗi hệ thống!" });
  }
};

export const getFilmsByLike = async (req, res) => {
  try {
    const films = await FilmModel.find();
    return res.status(200).json({
      success: true,
      message: "Done!!",
      data: films.sort((a, b) => b.like - a.like),
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Lỗi hệ thống!" });
  }
};

export const createFilms = async (req, res) => {
  const film = req.body;
  if (!film) {
    return res
      .status(400)
      .json({ success: false, message: "Thêm phim không thành công!" });
  }
  try {
    const existFilm = await FilmModel.findOne({ name: film.name });
    if (existFilm) {
      return res.status(400).json({ success: false, message: "Đã có phim!" });
    }
    const newFilms = new FilmModel(film);
    await newFilms.save();
    res.status(200).json({
      success: true,
      message: "Thêm thành công!",
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: "Thêm phim không thành công!", error });
  }
};

export const getFilmByName = async (req, res) => {
  const name = req.query.name;
  try {
    const film = await FilmModel.find(name);
    return res.status(200).json({
      success: true,
      message: "Lấy thông tin thành công",
      data: film,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Không tìm thấy phim!" });
  }
};

export const getFilmsByDate = async (req, res) => {
  const currentDate = req.query.year;
  try {
    const films = await FilmModel.find({
      field: { $gt: parseInt(currentDate) - 1 },
    });
    return res.status(200).json({
      success: true,
      message: "Done!",
      data: films,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Lỗi hệ thống!" });
  }
};

export const deleteFilm = async (req, res) => {
  const filmCode = req.query.filmCode;
  try {
    FilmModel.findOne(filmCode, function (error, film) {
      film.remove();
    });
    return res.status(200).json({
      success: true,
      message: "Xóa thành công!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Lỗi hệ thống!" });
  }
};
