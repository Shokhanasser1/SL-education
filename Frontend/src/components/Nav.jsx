import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import "./style.scss";


function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);
    const { t, i18n } = useTranslation();

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
                <Link className="link" to="/allCourses">{t('courses')}</Link>
                <Link className="link" to="/events">{t('events')}</Link>
                <Link className="link" to="/knowledgeBases">{t('knowledgeBases')}</Link>
                <Link className="link" to="/career">{t('career')}</Link>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                    <select name="" id="">
                        <option value="Toshkent">Tashkent</option>
                        <option value="Samarqand">Samarkand</option>
                        <option value="Buxoro">Bukhara</option>
                        <option value="Farg'ona">Fergana</option>
                        <option value="Andijon">Andijan</option>
                        <option value="Namangan">Namangan</option>
                        <option value="Qarshqadaryo">Qarshqadaryo</option>
                        <option value="Surxandaryo">Surkhandaryo</option>
                        <option value="Jissax">Jizzakh</option>
                        <option value="Guliston">Gulistan</option>
                        <option value="Navoiy">Navoiy</option>
                        <option value="Xorazm">Xorezm</option>
                        <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
                        <option value="Toashkent sh.">Tashkent city</option>
                    </select>
                </div>
                <a className="link" href="tel:+998123456789">
                    +998-12-345-67-89
                </a>
            </div>

            <div className="nav-right">
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
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
        </nav>
    );
}
export default memo(Nav);
