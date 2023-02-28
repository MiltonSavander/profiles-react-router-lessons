import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img src={logo} alt="Techover" className="logo" />
                    <div className="nav-links">
                        <NavLink to="/" className="nav-link">
                            Hem
                        </NavLink>
                        <NavLink to="about" className="nav-link">
                            Om oss
                        </NavLink>
                        <NavLink to="help" className="nav-link">
                            Hjälp
                        </NavLink>
                        <NavLink to="profiles" className="nav-link">
                            Profiles
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
