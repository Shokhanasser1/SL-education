import { useState, useEffect } from 'react';
import axios from 'axios';
import '../UsersStyle.scss';

export default function MyCourses() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('access'); // JWT token from localStorage
        const response = await axios.get('http://127.0.0.1:8000/api/courses/teacher/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Ошибка при получении курсов учителя:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Загрузка...</p>;

    return (
    <div className="my-courses-container">
      <h2>Мои курсы</h2>
      {courses.length === 0 ? (
        <p>У вас пока нет курсов.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>

    );
}