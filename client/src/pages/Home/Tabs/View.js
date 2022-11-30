/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card";
import { filmsState$ } from "../../../redux/selectors";
import * as filmActions from "../../../redux/actions/filmActions";
import moment from 'moment';

export default function ViewTab() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filmActions.getFilmsByView.byViewRequest());
  }, []);
  const films = useSelector(filmsState$).data;
  return (
    <>
      {films &&
        films.map((elm, index) => (
          <Card 
            key={index}
            poster={elm?.poster}
            name={elm?.name}
            release={elm?.release && moment(elm?.release).format('DD/MM/YYYY')}
            rating={elm?.rating}
            films={elm}
          />
        ))}
    </>
  );
}
