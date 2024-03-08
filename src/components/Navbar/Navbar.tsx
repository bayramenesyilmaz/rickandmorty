import './Navbar.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectTotalFavorites } from '../../redux/favoritesSlice';

const Navbar: React.FC = () => {
    const location = useLocation();
    const totalFavorites = useSelector(selectTotalFavorites);

    const pathname = location.pathname
    const [menuStatus, setMenuStatus] = useState(false);


    return <nav className='nav-container'>

        <Link className="router-link" to="/">
            <img className="left-logo" src="/images/rickandmortylogo2.png" alt="rm-logo" />
        </Link>

        <img
            src="/images/rickandmortylogo.png"
            alt="rick-and-morty-logo"
            className="nav-logo"
        />

        <ul className="nav-links">
            <Link className="router-link" to="/"> <li className={`${pathname === "/" && "active-link"}`} >Location</li> </Link>
            <Link className="router-link" to="/characters"> <li className={`${pathname === "/characters" && "active-link"}`} >Characters</li> </Link>
            <Link className="router-link" to="/favorites"> <li className={`${pathname === "/favorites" && "active-link"}`} >Favorites
                <span className='fav-badge' style={{ display: totalFavorites > 0 ? "" : "none" }}>{totalFavorites}</span>
            </li> </Link>
        </ul>

        {/* Mobile Menu */}
        <input type="checkbox" checked={menuStatus} onChange={(e) => setMenuStatus(!menuStatus)} id="nav-mobile" />
        <label htmlFor="nav-mobile">Menu</label>

        <ul className={`dropdown ${menuStatus ? "dropdown-active" : ""} `}>
            <Link onClick={() => setMenuStatus(!menuStatus)} className="router-link" to="/"> <li className={`${pathname === "/" && "active-link"}`} >Location</li> </Link>
            <Link onClick={() => setMenuStatus(!menuStatus)} className="router-link" to="/characters"> <li className={`${pathname === "/characters" && "active-link"}`} >Characters</li> </Link>
            <Link onClick={() => setMenuStatus(!menuStatus)} className="router-link" to="/favorites"> <li className={`${pathname === "/favorites" && "active-link"}`} >Favorites
                <span className='fav-badge' style={{ display: totalFavorites > 0 ? "" : "none" }}>{totalFavorites}</span>
            </li> </Link>
        </ul>

    </nav>
};

export default Navbar;
