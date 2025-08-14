import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profileMenu.scss";
import { useTranslation } from "react-i18next";


export default function ProfileMenu() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // <-- отдельное состояние
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  



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

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      className="profile-menu"
      ref={menuRef}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <i className="fas fa-user-circle icon"></i>

      {isAuthenticated && isDropdownOpen && (
        <div className="dropdown">
          <Link className="link" to={"/profile"}>{t('profile')}</Link>
          {role === "teacher" && (
            <Link className="link" to="/teacher-dashboard">{t('teacher-dashboard')}</Link>
          )}
          <Link className="link" to={"/profile-settings"}>{t('settings')}</Link>
          <button className="link" onClick={handleLogout}>{t('logout')}</button>
        </div>
      )}
    </div>
  );
}
