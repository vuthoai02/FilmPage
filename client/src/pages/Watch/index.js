import React from "react";
import { Grid, Typography } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import { ThumbUp, Visibility } from "@mui/icons-material";
import moment from "moment";

export default function Watch() {
  const film = JSON.parse(localStorage.getItem("film"));
  console.log(film);
  return (
    <Grid
      sx={{
        background: "#25252F",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          padding: "10px",
          width: "90%",
          fontSize: "28px",
          textTransform: "uppercase",
          marginBottom: "10px",
          fontWeight: '600'
        }}
      >
        RELAX FILM
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          padding: "10px",
          width: "70%",
          fontSize: "24px",
          textTransform: "uppercase",
          borderLeft: "2px solid yellow",
          marginBottom: "10px",
        }}
      >
        {film?.name}
      </Typography>
      <Grid sx={{ width: "70%" }}>
        <iframe
          width="1200"
          height="675"
          src={film?.link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={film?.name}
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "40%",
          margin: "10px 0",
        }}
      >
        <ReactStars count={film?.rating} size="5px" color="#ffd700" />
        <Typography sx={{ color: "#fff" }}>
          <ThumbUp /> {film?.like} Lượt thích
        </Typography>
        <Typography sx={{ color: "#fff" }}>
          <Visibility /> {film?.totalView} Lượt xem
        </Typography>
      </Grid>
      <Grid sx={{ width: "70%", color: "#fff", textAlign: "justify", paddingBottom: '10px' }}>
        <Typography>Nội dung: {film?.description}</Typography>
        <Typography>Tác giả: {film?.actor}</Typography>
        <Typography>
          Ngày pháy hành: {moment(film?.release).format("DD/MM/YYYY")}
        </Typography>
      </Grid>
    </Grid>
  );
}
