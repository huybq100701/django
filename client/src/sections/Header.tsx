import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import "../styles/base.scss";
import Icons from "../components/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { loginSuccess } from "../store/slice/accountSlice";
function Header() {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  const user = useSelector((state: RootState) => state.account.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  };
  useEffect(() => {
    const userLocal = localStorage?.getItem("userData");
    if (!user) {
      if (userLocal) dispatch(loginSuccess(JSON.parse(userLocal)));
    }
  }, []);
  return (
    <div className="header">
      <div className="header__logo">
        <img src="" alt="" />
      </div>
      <div className="header__menus">
       
        <div className="header__menu-link desktop">
          <Link to="/">Homepage</Link>
        </div>
        <div className="header__menu-link desktop">
          <Link to="/champions">Jewelries</Link>
        </div>
        <div className="header__menu-link desktop">
          <Link to={"/shop"}>Shop</Link>
        </div>
      </div>
      <div className="header__account">
        {user?.username ? (
          <div className="header__account-login" onClick={() => handleLogout()}>
            Logout
          </div>
        ) : (
          <Link to={"/login"} className="header__account-login">
            Login
          </Link>
        )}
        <Link to={"/cart"} className="header__account-playnow">
          Cart
        </Link>
      </div>
      <div className="header__menu-drawer">
        <button
          className="header__menu-drawer-btn"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <svg className="header__menu-drawer-logo" viewBox="0 0 48 48">
            <title>burgerNav</title>
            <path
              d="M0 18A18 18 0 0118 0h12a18 18 0 0118 18v12a18 18 0 01-18 18H18A18 18 0 010 30z"
              fill="gray"
              fillOpacity=".2"
            ></path>
            <path
              d="M15 18h18v2H15zm0 5h18v2H15zm0 7v-2h18v2z"
              fill="#fcfcfc"
            ></path>
          </svg>
        </button>
        <div
          className={`header__menu-drawer-content ${
            openMenu ? "is-active" : ""
          }`}
        >
          <div
            className="header__menu-drawer-heading"
            onClick={() => {
              setOpenMenu(false);
            }}
          >

          </div>

          <div className="menu-drawer__links">
            <div className="menu-drawer__link">
              <Link to="/">Homepage</Link>
            </div>
            <div className="menu-drawer__link">
              <Link to="/champions">Jewelries</Link>
            </div>

            <div className="menu-drawer__link">
              <Link to={"/shop"}>Shop</Link>
            </div>
          </div>

          <div className="menu-drawer__account">
            {user?.username ? (
              <div
                className="menu-drawer__account-login"
                onClick={() => handleLogout()}
              >
                Logout
              </div>
            ) : (
              <div className="menu-drawer__account-login">
                <Link to={"/login"}>Login</Link>
              </div>
            )}
            <div className="menu-drawer__account-playnow">
              <Link to={"/cart"}>Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
