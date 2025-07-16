import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddVideoForm() {
  const [courseId, setCourseId] = useState('');
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");
    axios.get("http://localhost:8000/api/courses/my/", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setCourses(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access");
    await axios.post("http://localhost:8000/api/courses/video/create/", {
      course: courseId,
      title,
      video_url: videoUrl
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить видео</h3>
      <select onChange={e => setCourseId(e.target.value)}>
        <option>Выберите курс</option>
        {courses.map(course => (
          <option key={course.id} value={course.id}>{course.title}</option>
        ))}
      </select>
      <input placeholder="Заголовок видео" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="URL видео" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
      <button type="submit">Добавить</button>
    </form>
  );
}
