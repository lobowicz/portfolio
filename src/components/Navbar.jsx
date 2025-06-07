import { Link } from 'react-router-dom';   // for linking across pages
import './Navbar.css';      // navbar styling

function Navbar() {
    return (
        <nav classname="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li>
                    <a href="https://forms.gle/UTFEyBGtkLZu5FCVA" className="nav-link">Contact</a>
                </li>
            </ul>  
        </nav>
    );
}

export default Navbar;
