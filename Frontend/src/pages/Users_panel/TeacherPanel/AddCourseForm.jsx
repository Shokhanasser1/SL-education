import { useState } from 'react';
import axios from 'axios';

export default function AddCourseForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access");
      await axios.post("http://localhost:8000/api/courses/", {
        title,
        description
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage("Курс добавлен");
    } catch (err) {
      setMessage("Ошибка: " + err.response?.data?.detail || "Не удалось создать курс");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить курс</h3>
      <input placeholder="Название курса" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Описание" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Создать</button>
      {message && <p>{message}</p>}
    </form>
  );
}
