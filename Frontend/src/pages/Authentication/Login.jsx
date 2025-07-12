import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>Вход</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
      <Link className='close-btn' to="/">❌</Link>
      {token && <p>Токен: {token}</p>}
      <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
    </div>
  )
}
