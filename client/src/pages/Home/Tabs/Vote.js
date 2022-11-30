/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card";
import { filmsState$ } from "../../../redux/selectors";
import * as filmActions from "../../../redux/actions/filmActions";
import moment from 'moment';

export default function VoteTab() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filmActions.getFilmsByLike.byLikeRequest());
  }, []);
  const films = useSelector(filmsState$).data;
  console.log(films)
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
