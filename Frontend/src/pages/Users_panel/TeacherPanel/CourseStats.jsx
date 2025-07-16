import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CourseStats() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");
    axios.get("http://localhost:8000/api/courses/my/", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h3>Статистика курсов</h3>
      {courses.map(course => (
        <div key={course.id}>
          <strong>{course.title}</strong> — просмотров: {course.views_count}
        </div>
      ))}
    </div>
  );
}
