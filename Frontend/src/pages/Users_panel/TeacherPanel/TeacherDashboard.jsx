import { Link } from 'react-router-dom';
import MyCourses from './MyCourses';

export default function TeacherDashboard() {
    return (
   <div className="teacher-dashboard">
      <h2>Панель учителя</h2>
      <Link className='link' to={'/teacher/add-course'}>Добавить</Link>

      <MyCourses />
    </div> 
    )
}