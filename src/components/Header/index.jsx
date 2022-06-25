import React from "react";
import User from "../../assets/imgs/user.jpg";
import { ReactComponent as Logo } from "../../assets/icons/airbnb.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Bookmark } from "../../assets/icons/bookmark.svg";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Logo className="header__logo" onClick={() => navigate("/hotel")} />
      <div className="header__search">
        <input placeholder="Seach hotels" type="text" className="header__input" />
        <Search className="icon  " />
      </div>
      <div className="header__details">
        <div className="header__details-item" style={{ position: "relative" }}>
          <Bookmark className="icon bookmark" />
          <span className="notification">13</span>
        </div>
        <div className="header__details-item" style={{ position: "relative" }}>
          <Chat className="icon chat" />
          <span className="notification">17</span>
        </div>
        <div className="header__details-item user">
          <Image width={50} height={50} src={User} alt="user" className="user__img" />
          Melissa
        </div>
      </div>
    </div>
  );
};

export default Header;
