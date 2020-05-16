import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    // <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    //     <div className="navbar-brand">
    //         GitHub поиск
    //     </div>
    //     <ul className="navbar-nav">
    //         <li className="nav-item">
    //             <NavLink exact to="/" className="nav-Link"> Главная </NavLink>
    //         </li>
    //         <li className="nav-item">
    //             <NavLink to="/about" className="nav-Link">Информация</NavLink>
    //         </li>
    //     </ul>
    //
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <div className="navbar-brand">
                    GitHub поиск
                </div>
                <ul className="navbar-nav">
                    <li className="navbar-brand">
                        <NavLink exact to="/" className="nav-Link text-light">Главная</NavLink>
                    </li>
                    <li className="navbar-brand">
                        <NavLink to="/about" className="nav-Link text-light">Информация</NavLink>
                    </li>
                </ul>
            </ul>
        </div>
    </nav>
);