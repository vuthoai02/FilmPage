import React, { useEffect } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import FilmsTable from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import { columns, filmsField } from "./List";
import { DialogFormComponent } from "../../components/Modal";
import * as filmsAction from "../../redux/actions/filmActions";
import { filmsState$ } from "../../redux/selectors";

export default function Admin() {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState(null);
  const [rows, setRows] = React.useState([]);

  const films = useSelector(filmsState$).data;

  const dispatch = useDispatch();

  const handleClick = (event, row) => {
    setValues(row);
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    if (open) {
      setValues(null);
    }
    setOpen(!open);
  };

  const handleChange = (name, event, type) => {
    if (type === "date") {
      setValues({ ...values, [name]: event.target.value });
    } else if (type === "file") {
      setValues({ ...values, [name]: event });
    } else if (type === "int") {
      setValues({ ...values, [name]: parseInt(event.target.value) });
    } else if (type === "float") {
      setValues({ ...values, [name]: parseFloat(event.target.value) });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleDelete = () => {
    if(values?._id){
      dispatch(filmsAction.deleteFilm.deleteFilmRequest(values?._id));
    }
  }

  const handleCreateFilm = React.useCallback(() => {
    if (values) {
      const payload = { ...values, release: `${values?.release}` };
      dispatch(filmsAction.createFilm.createFilmRequest(payload));
    }
    setValues(null);
  }, [values, dispatch]);

  useEffect(() => {
    if (!films) dispatch(filmsAction.getFilms.getFilmsRequest());
  }, []);

  useEffect(() =>{
    if(films){
      const newFilms = films.map((elm,index) => ({...elm, id: index+1}));
      setRows(newFilms);
    }
  },[films])

  return (
    <Grid
      item
      xs={12}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="10px 0"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          marginBottom: "10px",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <Typography fontWeight={600} fontSize={24}>
          Danh sách phim
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleClickOpen}
        >
          Thêm phim
        </Button>
      </Box>
      <FilmsTable
        columns={columns(handleClick, anchorEl, handleClose, handleClickOpen, handleDelete)}
        rows={rows}
      />
      <DialogFormComponent
        handleChange={handleChange}
        filmsField={filmsField(values)}
        open={open}
        onClose={handleClickOpen}
        handleSubmit={handleCreateFilm}
      />
    </Grid>
  );
}
