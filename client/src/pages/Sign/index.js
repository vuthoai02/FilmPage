import React, { useEffect } from "react";
import { Grid, Paper, Box, Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { useSelector, useDispatch } from "react-redux";
import { createUser, getUser } from "../../redux/actions/userActions";
import { userState$ } from "../../redux/selectors";
import "./index.css";

import Field from "./field";

export default function Sign() {
  const user = useSelector(userState$);
  const [tab, setTab] = React.useState("login");
  const [values, setValues] = React.useState({
    userName: "",
    password: "",
    role: false,
  });

  const dispatch = useDispatch();

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  const handleRegister = React.useCallback(() => {
    dispatch(createUser.createUserRequest(values));
    setValues({
      userName: "",
      password: "",
      role: false,
    });
  }, [values, dispatch]);

  const handleLogin = React.useCallback(() => {
    dispatch(getUser.getUserRequest(values));
    setValues({
      userName: "",
      password: "",
      role: false,
    });
  }, [values, dispatch]);

  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, [user]);

  return (
    <Grid item xs={12} className="container">
      <Paper elevation={3} sx={{ padding: "20px" }}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChangeTab}>
              <Tab label="Đăng nhập" value="login" />
              <Tab label="Đăng ký" value="register" />
            </TabList>
          </Box>
          <TabPanel value="login">
            <Field
              values={values}
              setValues={setValues}
              handleSubmit={handleLogin}
            />
          </TabPanel>
          <TabPanel value="register">
            <Field
              values={values}
              setValues={setValues}
              handleSubmit={handleRegister}
            />
          </TabPanel>
        </TabContext>
      </Paper>
    </Grid>
  );
}
