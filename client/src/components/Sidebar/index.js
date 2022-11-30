import React, { useEffect, useState } from "react";
import MenuItem from "./menuItems";
import {
  Home,
  Movie,
  ArrowBack,
  ArrowForward,
  Search,
  ArrowCircleDown,
  TableView,
  Person
} from "@mui/icons-material";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { userState$ } from "../../redux/selectors";
import { Link } from "react-router-dom";
import * as userActions from "../../redux/actions/userActions";
import {ROUTER} from '../../router';

export const menuItems = [
  {
    name: "Trang chủ",
    exact: true,
    to: "/",
    iconName: <Home />,
  },
  {
    name: "Thể loại",
    exact: true,
    to: `/`,
    iconName: <Movie />,
    subMenus: [
      { name: "Hành động", to: ROUTER.CATEGORY.ACTION },
      { name: "Tình cảm", to: ROUTER.CATEGORY.ROMANTIC },
      { name: "Kinh dị", to: ROUTER.CATEGORY.HORROR },
      { name: "Hài hước", to: ROUTER.CATEGORY.DRAMA },
      { name: "Viễn tưởng", to: ROUTER.CATEGORY.FANTASY },
    ],
  },
  {
    name: "Phim đã lưu",
    exact: true,
    to: "/",
    iconName: <ArrowCircleDown />,
  },
];

const SideMenu = () => {
  const dispatch = useDispatch();
  const [inactive, setInactive] = useState(true);
  const user = useSelector(userState$);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }
  }, [inactive]);
  //get user by token
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.getUserById.getUserByIdRequest(accessToken));
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  useEffect(() => {
    const has = menuItems.filter(elm => elm.to === '/admin/films');
    if (has && user?.role) {
      menuItems.push({
        name: "Quản lý phim",
        exact: true,
        to: "/admin/films",
        iconName: <TableView />,
      });
    }
  }, [user]);

  console.log(user);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <ArrowForward sx={{ color: "#fff" }} />
          ) : (
            <ArrowBack color="primary" />
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <Search />
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconName={menuItem.iconName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
      {user ? (
        <div className="side-menu-footer">
          <div className="user-info">
            <h5>{user.userName}</h5>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                dispatch(userActions.logout());
              }}
            >
              Đăng xuất <ArrowForward />
            </button>
          </div>
        </div>
      ) : (
        <div className="side-menu-footer">
          <div className="user-info">
            <Link
              exact
              to={"/sign"}
              style={{ textDecoration: "none", color: "#00FF00" }}
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
