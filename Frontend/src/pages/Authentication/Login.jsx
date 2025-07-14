import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './authenficationStyle.scss';


export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/login/', {
        username,
        password
      })
      setToken(res.data.access)
      localStorage.setItem('token', res.data.access)
    } catch (err) {
      alert('Ошибка входа')
    }
  }

  return (
    <div className="container">
      <div className="log-reg-btns">
        <a href="/register" className="reg-btn">Регистрация</a>
        <a href="/sign_in" className="log-btn" data-active>Вход</a>
      </div>
      <div className="inputs-container">
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Войти</button>
      </div>
      {token && <p>Токен: {token}</p>}
    </div>
  )
}
