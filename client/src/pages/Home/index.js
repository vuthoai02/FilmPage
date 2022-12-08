import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Tab, Box, Typography } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import * as filmActions from "../../redux/actions/filmActions";
import { allFilmState$ } from "../../redux/selectors";
import moment from "moment";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Card from "../../components/Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

import ViewTab from "./Tabs/View";
import NewTab from "./Tabs/New";
import VoteTab from "./Tabs/Vote";

import banner from "../../asset/download.jpeg";

export default function Home() {
  const dispatch = useDispatch();
  const imgList = [banner, banner, banner];
  const [tabs, setTab] = React.useState({
    tab: "new",
    label: "Phim mới",
  });
  const allFilms = useSelector(allFilmState$);
  const handleChangeTab = (event, newValue) => {
    var label = "";
    if (newValue === "new") label = "Phim mới";
    else {
      label = newValue === "view" ? "Lượt xem nhiều nhất" : "Yêu thích";
    }
    setTab({
      tab: newValue,
      label,
    });
  };

  React.useEffect(() => {
    if (!allFilms) dispatch(filmActions.getFilms.getFilmsRequest());
  }, []);

  console.log(allFilms);
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#25252F",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      <Grid className="sliderShow">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imgList.map((elm, index) => (
            <SwiperSlide>
              <img
                key={index}
                src={elm}
                alt=""
                style={{ width: "100%", height: "70vh" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid className="films">
        <Typography className="tabTitle" fontWeight="600">
          {tabs.label}
        </Typography>
        <TabContext value={tabs.tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChangeTab}>
              <Tab label="Phim mới" value="new" />
              <Tab label="Lượt xem nhiều nhất" value="view" />
              <Tab label="Yêu thích" value="vote" />
            </TabList>
          </Box>
          {tabs.tab === "new" && (
            <TabPanel value="new" className="tabs">
              <NewTab />
            </TabPanel>
          )}
          {tabs.tab === "view" && (
            <TabPanel value="view" className="tabs">
              <ViewTab />
            </TabPanel>
          )}
          {tabs.tab === "vote" && (
            <TabPanel value="vote" className="tabs">
              <VoteTab />
            </TabPanel>
          )}
        </TabContext>
      </Grid>
      <Grid className="films" sx={{display: 'flex'}}>
        {allFilms &&
          allFilms.map((elm, index) => (
            <Card
              key={index}
              poster={elm?.poster}
              name={elm?.name}
              release={
                elm?.release && moment(elm?.release).format("DD/MM/YYYY")
              }
              rating={elm?.rating}
              films={elm}
            />
          ))}
      </Grid>
    </Grid>
  );
}
