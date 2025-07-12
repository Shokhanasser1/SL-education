import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Nav() {
    return (
        <nav>
            <Link className="link" to={"/"}>
                <h1>SL Education</h1>
            </Link>
            <Link className="link" to="/allCourses">
                All courses
            </Link>
            <Link className="link" to="/events">
                Events
            </Link>
            <Link className="link" to="/knowledgeBases">
                Knowledge bases
            </Link>
            <Link className="link" to="/career">
                Career
            </Link>
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
            <div>
                <Link className="link" to={"/signin"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}
export default memo(Nav);
