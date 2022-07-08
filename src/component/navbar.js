import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./navbar.css";



const NavbarAll = ({handleLogout}) => {
    const [isMobile,setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <h3 className="logo">Visualizer</h3>
            <ul className={isMobile ?"nav-links-mobile":"nav-links"}
            onClick={()=> setIsMobile(false)}
            >
                <Link to="/" className="items">
                    <li>Home</li>
                </Link>
                    <li className="items">Visualizer
                        <ul className="dropdown-content">
                        <Link to="/Bubble-sort" className="list-items">
                            <li>Bubble Sort</li>
                        </Link>
                        <Link to="/Insertion-sort" className="list-items">
                            <li>Insertion Sort </li>
                        </Link>
                        <Link to="/Merge-sort" className="list-items">
                            <li>Merge Sort</li>
                        </Link>
                        <Link to="/Quick-sort" className="list-items">
                            <li>Quick Sort</li>
                        </Link>
                        <Link to="/Selection-sort" className="list-items">
                            <li>Selection Sort</li>
                        </Link>
                        </ul>
                    </li>
                <Link to="/myNotes" className="items">
                    <li>My Notes</li>
                </Link>
                    <li className="items" onClick={handleLogout}>Logout</li>
            </ul>
            <button className="mobile-menu-icon"
            onClick={()=>setIsMobile(!isMobile)}
            >
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    )
}

export default NavbarAll;