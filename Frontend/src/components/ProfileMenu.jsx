import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profileMenu.scss";

export default function ProfileMenu() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/");
        window.location.reload();
    };

  // Закрытие по клику вне
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsAuthenticated(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="profile-menu" ref={menuRef}>
      <i className="fas fa-user-circle icon" onClick={() => setIsAuthenticated(!isAuthenticated)}></i>
      {isAuthenticated && (
        <div className="dropdown">
        <Link className="link" to={"/profile"}>Профиль</Link>
          <Link className="link" to={"/profile-settings"}>Настройки</Link>
          <button className="link" onClick={handleLogout}>Выход</button>
        </div>
      )}
    </div>
    
  );
}
