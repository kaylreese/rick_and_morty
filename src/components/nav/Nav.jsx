import React from "react";
import { Link } from "react-router-dom";
// import About from "../about/About";
import SearchBar from "../searchbar/SearchBar";
import navStyle from "./Nav.module.css"

export default function Nav({ onSearch, logout }){

    return(
        <div>
            <div className={navStyle.nav}>
                <Link className={navStyle.link} to='/home'>Home</Link>
                <Link className={navStyle.link} to='/favorites'>Favorites</Link>
                <Link className={navStyle.link} to='/about'>About</Link>
                <SearchBar className={navStyle.search} onSearch={onSearch} />
                <Link className={navStyle.link} onClick={logout} to='/'>Salir</Link>
            </div>
            <br />
            
        </div>
    );
}