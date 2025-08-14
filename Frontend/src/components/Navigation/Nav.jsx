import { memo, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";
import "./Nav.scss";

const languages = [
    { code: "uz", name: "O'zbekcha", countryCode: "UZ" },
    { code: "ru", name: "Русский", countryCode: "RU" },
    { code: "en", name: "English", countryCode: "GB" },
];
const locations = [
    { code: "TAS", nameKey: "tashkent" },
    { code: "SAM", nameKey: "samarkand" },
    { code: "BUH", nameKey: "bukhara" },
    { code: "HOR", nameKey: "khorezm" },
];

function Nav() {
    const { t, i18n } = useTranslation();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);

    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    const langDropdownRef = useRef(null);
    const locationDropdownRef = useRef(null);


    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang && languages.some(lang => lang.code === savedLang)) {
            const langObj = languages.find(lang => lang.code === savedLang);
            setSelectedLang(langObj);
            i18n.changeLanguage(savedLang);
        } else {
            localStorage.setItem("lang", i18n.language);
        }
    }, [i18n]);

    const handleSelectLang = (lang) => {
        setSelectedLang(lang);
        i18n.changeLanguage(lang.code);
        localStorage.setItem("lang", lang.code);
        setIsLangOpen(false);
    };


    const handleSelectLocation = (location) => {
        setSelectedLocation(location.code);
        setIsLocationOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
                setIsLangOpen(false);
            }
            if (locationDropdownRef.current && !locationDropdownRef.current.contains(e.target)) {
                setIsLocationOpen(false);
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
            <Link className="logo" to="/"><h1>SL Education</h1></Link>

            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <Link className="link" to="/courses">{t('courses')}</Link>
                <Link className="link" to="/events">{t('events')}</Link>
                <Link className="link" to="/about">{t('about-us')}</Link>

                <div className={`location-dropdown ${isLocationOpen ? "open" : ""}`} ref={locationDropdownRef}>
                    <button className="dropdown-btn" onClick={() => setIsLocationOpen(p => !p)}>
                        <span className="selected-location">{selectedLocation ? t(locations.find(loc => loc.code === selectedLocation).nameKey) : t('selectedLocation')}</span>
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M7 10l5 5 5-5z" fill="currentColor" />
                        </svg>
                    </button>
                    {isLocationOpen && (
                        <ul className="dropdown-list">
                            {locations.map((loc) => (
                                <li key={loc.code} onClick={() => handleSelectLocation(loc)}>
                                    {t(loc.nameKey)}
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
            <div className={`lang-changer ${isLangOpen ? "open" : ""}`} ref={langDropdownRef}>
                <button className="dropdown-btn" onClick={() => setIsLangOpen(p => !p)}>
                    <span className="flag"><ReactCountryFlag countryCode={selectedLang.countryCode} svg style={{width: "1.5em", height: "1.5em" }} /></span>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path d="M7 10l5 5 5-5z" fill="currentColor" />
                    </svg>
                </button>
                {isLangOpen && (
                    <ul className="dropdown-list">
                        {languages.map((lang) => (
                            <li key={lang.code} onClick={() => handleSelectLang(lang)}>
                                <span className="lang-name">{lang.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
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
