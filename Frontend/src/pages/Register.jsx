import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/register/', {
        username,
        password
      })
      setMessage(res.data.message)
    } catch (err) {
      setMessage(err.response?.data?.error || 'Ошибка регистрации')
    }
  }

  return (
    <div>
      <h2>Регистрация</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Зарегистрироваться</button>
      <p>{message}</p>
    </div>
  )
}
