import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to = "/about">About</Link>
                <Link to ="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/help">Help</Link>

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact Us">Contact</a> */}
            </nav>
            
        </div>
    );
};

export default Header;