import React from "react";
import {Link} from 'react-router-dom';

export default function Nav() {
    return(
        <nav class="navbar navbar-inverse elegant-color">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-light">
            <Link to="/home" class="nav-link">HOME</Link>
            <Link to="/About" class="nav-link">ABOUT</Link>
            <Link to="/search" class="nav-link">SEARCH</Link>
            <Link to="/" class="nav-link">Btn 4</Link>
            <Link to="/Contact" class="nav-link">CONTACT</Link>
        </span>
      </div>
    </nav>
    )
}