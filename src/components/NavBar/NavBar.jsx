import { Link } from 'react-router-dom'; 
import './style.css';

function NavBar(){
    return(
        <section className="navigation-section">
            <nav className="navbar navbar-expand-lg custom-nuvbar fixed-top shadow-sm">
                <div className="container">
                
                    <Link className="navbar-brand logo-text" to="/">
                        <img src="#" alt="logo" width="70" height="60" />
                    </Link>
            
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Переключить навигацию">
                        <span className="navbar-toggler-icon"></span>
                    
                    </button>
                    <div className="collapse navbar-collapse full-screen-menu" id="navbarNav">
                        <ul className="navbar-nav mx-auto align-items-center" style={{display: 'flex', gap: '30px'}}>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" style={{ fontSize: '14px' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" style={{ fontSize: '14px' }}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" style={{ fontSize: '14px' }}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" style={{ fontSize: '14px' }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" style={{ fontSize: '14px' }}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
};
export default NavBar;
    