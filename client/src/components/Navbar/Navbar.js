import React, { useState } from 'react'
import "./Navbar.css";
import { MenuList } from "./MenuList";
import {NavLink} from "react-router-dom";

const Navbar = () => {
        const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active">{title}</NavLink>
            </li>
        );
    });
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <nav>
            <div className="logo">
                Food<font>Finder</font>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
        </nav>
    );
};

export default Navbar;

