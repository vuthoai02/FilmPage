import React from "react";
import {
  FormControl,
  Grid,
  TextField,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Field({handleSubmit, values, setValues}) {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "10px", display: "inline-block" }}>
          <TextField
            id="userName"
            label="Tên đăng nhập"
            multiline
            value={values.userName}
            onChange={handleChange("userName")}
            sx={{
              m: 1,
              padding: 0,
              margin: "0",
              width: "30ch",
            }}
          />
        </div>
        <div style={{ marginTop: "10px", display: "inline-block" }}>
          <FormControl
            sx={{
              m: 1,
              padding: 0,
              margin: "0",
            }}
            variant="outlined"
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ margin: "10px 0", width: "100%" }}
        >
          Đăng nhập
        </Button>
      </Grid>
    </>
  );
}
