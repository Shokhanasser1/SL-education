import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './authenficationStyle.scss';

export default function Register() {

  const [formData, setFormData] = useState({ username: "", email: "", firstname: "", lastname: "",  password: "", passwordConfirm: "", role: "student" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        setMessage("Заполните все поля");
        return;
      }
    }

    if (!formData.username || !formData.email || !formData.firstname || !formData.lastname || !formData.password || !formData.passwordConfirm) {
      setMessage("Заполните все поля");
      return;
    }
    if (formData.password !== formData.passwordConfirm) {
        setMessage("Пароли не совпадают");
        return;
    }
    if (formData.password.length < 8) {
        setMessage("Пароль должен быть не менее 8 символов");
        return;
    }
    if (formData.username.length < 3) {
        setMessage("Имя пользователя должно быть не менее 3 символов");
        return;
    }
    

    try {
      const res = await axios.post('http://localhost:8000/api/register/', formData);
      if (res.status === 201) {
        setMessage("Регистрация прошла успешно");

        const loginRes = await axios.post('http://localhost:8000/api/login/', {
          username: formData.username,
          password: formData.password
        });

        const { access, refresh, role } = loginRes.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("role", role);

        navigate('/'); // Redirect to home page after successful registration
        window.location.reload();
      }
    } catch (error) {
      if (error.response?.data?.error) {
        setMessage(error.response?.data?.error);
      } else if (typeof error.response?.data === 'object') {
         const errors = Object.values(error.response.data).flat().join(', ');
        setMessage(errors);
      } else {
        setMessage('Произошла ошибка при регистрации');
      }
    }
  }
  return (
    <div className="container">
      <div className="log-reg-btns">
        <a href="/register" className="reg-btn" data-active>Регистрация</a>
        <a href="/sign_in" className="log-btn">Вход</a>
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
        type='email'
        name='email'
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        />
        <input
        type='text'
        name='firstname'
        placeholder="First name"
        value={formData.firstname}
        onChange={handleChange}
        />
        <input
        type='text'
        name='lastname'
        placeholder="Last name"
        value={formData.lastname}
        onChange={handleChange}
        />
        <input
        type='password'
        name='password'
        placeholder="Password"
        value={formData.password} 
        onChange={handleChange}
        />
        <input
        type='password'
        name='passwordConfirm'
        placeholder="Comfirm your password"
        value={formData.passwordConfirm} 
        onChange={handleChange}
        />
        <select name="role" onChange={handleChange}>
          <option value="student">Ученик</option>
          <option value="teacher">Учитель</option>
          <option value="admin">Администратор</option>
        </select>
        <button type='submit'>Зарегистрироваться</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  )
}