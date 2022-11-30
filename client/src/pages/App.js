import React, { useState } from "react";
import SideMenu from "../components/Sidebar";
import { Grid} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ROUTER } from "../router";
import "./App.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import Home from "./Home";
import Sign from "./Sign";
import Admin from "./Admin";
import CategoryPages from "./Category";
import Watch from "./Watch";


const App = () => {
  return (
    <Grid container>
      <SideMenu />
      <Routes>
        <Route exact path={ROUTER.HOME} element={<Home />} />
        <Route exact path={ROUTER.SIGN} element={<Sign />} />
        <Route exact path={ROUTER.ADMIN.FILMS} element={<Admin />} />
        <Route exact path={ROUTER.CATEGORY.ACTION} element={<CategoryPages />} />
        <Route exact path={ROUTER.CATEGORY.ROMANTIC} element={<CategoryPages />} />
        <Route exact path={ROUTER.CATEGORY.DRAMA} element={<CategoryPages />} />
        <Route exact path={ROUTER.CATEGORY.HORROR} element={<CategoryPages />} />
        <Route exact path={ROUTER.CATEGORY.FANTASY} element={<CategoryPages />} />
        <Route exact path={ROUTER.WATCH} element={<Watch />} />
      </Routes>
      <NotificationContainer />
    </Grid>
  );
};

export default App;
