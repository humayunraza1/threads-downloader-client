import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <Link to="/">
                <a className="heading"><h1>
                    Threads Media Downloader
                </h1>
                </a>
            </Link>
            <nav>
                <div className="burger-menu" onClick={toggleMenu}>
                    <div className="burger-icon"><MenuIcon fontSize="medium" sx={{ color: grey["A100"] }} /></div>
                </div>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu-close-btn" style={{ display: isMenuOpen ? "block" : "none", color: grey["A100"] }}><CloseIcon onClick={toggleMenu} /></div>
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/terms-and-condition" onClick={toggleMenu}>
                            T&C
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy-policy" onClick={toggleMenu}>
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" onClick={toggleMenu}>
                            FAQs
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
