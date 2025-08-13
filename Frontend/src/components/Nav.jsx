import { memo, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import "./style.scss";


function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Выберите локацию");
    const dropdownRef = useRef(null);

    const locations = [
  { code: "TAS", name: "Ташкент" },
  { code: "SAM", name: "Самарканд" },
  { code: "BUH", name: "Бухара" },
  { code: "XIV", name: "Хива" },
  { code: "NUK", name: "Нукус" },
];

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleSelect = (location) => {
        setSelectedLocation(location.name);
        console.log("Код локации:", location.code); // data-location аналог
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("access");
        const storedRole = localStorage.getItem("role");


        if (token) {
            setIsAuthenticated(true);
            setRole(storedRole);
        } else {
            setIsAuthenticated(false);
            setRole(null);
        }
    }, []);

    console.log(role);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav>
            <Link className="link" to="/"><h1>SL Education</h1></Link>

            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <Link className="link" to="/courses">{t('courses')}</Link>
                <Link className="link" to="/events">{t('events')}</Link>
                <Link className="link" to="/about">{t('about-us')}</Link>

                <div className={`location-dropdown ${isOpen ? "open" : ""}`} ref={dropdownRef}>
                    <button className="dropdown-btn" onClick={toggleDropdown}>
                        <span className="selected-location">{selectedLocation}</span>
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M7 10l5 5 5-5z" fill="currentColor" />
                        </svg>
                    </button>
                    {isOpen && (
                        <ul className="dropdown-list">
                            {locations.map((loc) => (
                                <li key={loc.code} onClick={() => handleSelect(loc)}>
                                    {loc.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    {isAuthenticated ? (
                        <>
                            {<ProfileMenu />}
                        </>
                    ) : (
                        <Link className="link" to={"/sign_in"}>{t('signIn')}
                            <i className="fa fa-user icon"></i></Link>
                    )}
                </div>
            </div>
            <div className="lang-changer">
                <select
                    value={i18n.language}
                    onChange={(e) => {
                        const lang = e.target.value;
                        i18n.changeLanguage(lang);
                        localStorage.setItem("lang", lang);
                    }}>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                </select>
            </div>

            <div className="nav-right">
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </nav>
    );
}
export default memo(Nav);
