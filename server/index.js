import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import users from './routers/users.js';
import films from './routers/films.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const URI = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/users', users);
app.use('/films', films);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });