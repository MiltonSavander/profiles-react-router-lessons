import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img src={logo} alt="Techover logo" className="logo" />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Hem
                        </NavLink>
                        <NavLink className="nav-link" to="about">
                            Om oss
                        </NavLink>
                        <NavLink className="nav-link" to="Help">
                            Hjälp
                        </NavLink>
                        <NavLink className="nav-link" to="profiles">
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
