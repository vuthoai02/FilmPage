import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { filmsState$ } from "../../redux/selectors";
import * as filmActions from "../../redux/actions/filmActions";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import moment from "moment";

const categoryList = [
    {key: 'action', label: 'Hành động'},
    {key: 'romantic', label: 'Tình cảm'},
    {key: 'drama', label: 'Hài hước'},
    {key: 'horror', label: 'kinh dị'},
    {key: 'fantasy', label: 'Viễn tưởng'},
];

export default function CategoryPages() {
  const dispatch = useDispatch();
  const location = useLocation().pathname.split("/");
  const films = useSelector(filmsState$).data;

  React.useEffect(() => {
    if (location)
      dispatch(
        filmActions.getFilmsByCategory.byCategoryRequest(location.at(-1))
      );
  }, []);

  return (
    <Grid
      sx={{
        width: "100vw",
        minHeight: "101vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#25252F",
      }}
    >
      <Typography
        sx={{
          width: "95%",
          fontSize: "24px",
          color: "#fff",
          fontWeight: "600",
          fontFamily: "serif",
        }}
      >
        RELAX FILM
      </Typography>
      <Typography
        sx={{
          width: "70vw",
          marginBottom: "5px",
          padding: "10px",
          fontWeight: "600",
          fontSize: "18px",
          color: "#fff",
        }}
      > {`Thể loại: ${categoryList.filter(elm => elm.key === location.at(-1))[0].label}`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "70vw",
          background: "#fff",
          borderRadius: "15px",
          padding: "10px",
          minHeight: "85vh",
          justifyContent: films?'initial':'center',
          alignItems: films?'initial': 'center',
        }}
      >
        {films ? (
          films.map((elm, indx) => (
            <Card
              key={indx}
              poster={elm?.poster}
              name={elm?.name}
              release={
                elm?.release && moment(elm?.release).format("DD/MM/YYYY")
              }
              rating={elm?.rating}
              films={elm}
            />
          ))
        ) : (
          <Typography color="error">Không có phim!</Typography>
        )}
      </Box>
    </Grid>
  );
}
