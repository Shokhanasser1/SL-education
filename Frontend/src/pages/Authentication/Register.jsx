import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './authenficationStyle.scss';

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/register/', {
        username,
        email,
        firstname,
        lastname,
        password,
        passwordConfirm,
      })
      setMessage(res.data.message)
    } catch (err) {
      setMessage(err.response?.data?.error || 'Ошибка регистрации')
    }
  }

  return (
    <div className="container">
      <div className="log-reg-btns">
        <a href="/register" className="reg-btn" data-active>Регистрация</a>
        <a href="/sign_in" className="log-btn">Вход</a>
      </div>
      <div className="inputs-container">
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="First name" value={firstname} onChange={e => setFirstname(e.target.value)} />
        <input placeholder="Last name" value={lastname} onChange={e => setLastname(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input placeholder="Comfirm your password" type="PasswordConfirm" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
        <button onClick={handleRegister}>Зарегистрироваться</button>
      </div>
      <p>{message}</p>
    </div>
  )
}
