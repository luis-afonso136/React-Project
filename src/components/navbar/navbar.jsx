import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-title">RetroPixel</Link>
            <div className="navbar-buttons">
                <Link to="/login" className="nav-button">
                    <i className="fas fa-sign-in-alt"></i>
                </Link>
                <Link to="/register" className="nav-button">
                    <i className="fas fa-user-plus"></i>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
