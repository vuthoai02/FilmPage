import React from "react";
import { useDispatch } from "react-redux";
import { Paper, Typography, Box, Grid, Button } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import {ROUTER} from '../../router';
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWatch = React.useCallback(() => {
    if(props.films){
      console.log(JSON.stringify(props.films))
      localStorage.setItem('film', JSON.stringify(props.films));
      navigate(ROUTER.WATCH);
    }
  }, [dispatch, props?.films]);
  return (
    <Paper
      elevation={3}
      sx={{
        width: "220px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        maxHeight: "42.5vh",
      }}
    >
      <Box component="img" src={props?.poster} alt="" sx={{ width: "200px" }} />
      <Typography fontWeight="600">{props?.name} </Typography>
      <Grid display="flex" justifyContent="space-between">
        <Typography
          sx={{ marginRight: "45px" }}
          fontWeight="600"
          color="primary"
        >
          {props?.release}
        </Typography>
        <ReactStars count={props?.rating} size="5px" color="#ffd700" />
      </Grid>
      <Button
        variant="contained"
        sx={{ marginTop: "5px" }}
        onClick={handleWatch}
      >
        Xem phim
      </Button>
    </Paper>
  );
}
