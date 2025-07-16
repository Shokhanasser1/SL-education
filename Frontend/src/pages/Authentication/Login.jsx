import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './authenficationStyle.scss';


export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setMessage("Заполните все поля");
      return;
    }


    try {
      const res = await axios.post('http://localhost:8000/api/login/', formData);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refressh", res.data.refresh);
      localStorage.setItem('token', res.data.role);
      localStorage.setItem('username', res.data.username);

      setMessage("Вход выполнен успешно!");
      navigate('/'); // Redirect to home page after successful login
      window.location.reload(); // Reload the page to reflect changes
    } catch (err) {
      setMessage(err.response?.data?.error || 'Неверные данные');
    }
  };

  return (
    <div className="container">
      <div className="log-reg-btns">
        <a href="/register" className="reg-btn">Регистрация</a>
        <a href="/sign_in" className="log-btn" data-active>Вход</a>
      </div>
      <form onSubmit={handleSubmit} className="inputs-container">
        <input 
        type='text'
        name='username'
        placeholder="Username" 
        value={formData.username} 
        onChange={handleChange}
        />
        <input
        type='password'
        name='password'
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
        />
        <button type='submit'>Войти</button>
      {message && <p>{message}</p>}
      </form>
    </div>
  );
}
