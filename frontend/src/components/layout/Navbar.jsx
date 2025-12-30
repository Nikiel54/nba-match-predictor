import { NavLink } from "react-router";
import basketballIcon from "../../assets/basketball.png";

export default function Navbar() {

    return (
        <nav id="navbar">
            <div className="pg-title">
                <div className="logo-img-container">
                    <img className="logo-img" src={basketballIcon} alt="Image of a basketball" width="1.3em" height="auto"/>
                </div>
                <strong>CourtSense</strong>
            </div>
            <div className="nav-links">
                <NavLink to='/'
                    className={({ isActive }) => isActive ? "is-active-page" : "not-active-page"}
                >
                    Dashboard
                </NavLink>
                <NavLink to='/about'
                    className={({ isActive }) => isActive ? "is-active-page" : "not-active-page"}
                >
                    About
                </NavLink>
            </div>
        </nav>
    )
}