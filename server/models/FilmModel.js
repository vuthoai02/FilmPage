import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  release: {
    type: Date,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
  poster: {
    type: Object,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  totalView: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
  createAt: {
    type: String,
    required: true,
  },
  filmCode: {
    type: String,
    required: true,
  }
});

export const FilmModel = mongoose.model("Films", schema);
