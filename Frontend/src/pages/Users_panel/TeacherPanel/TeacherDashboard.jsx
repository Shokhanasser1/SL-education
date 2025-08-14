import { Link } from 'react-router-dom';
import MyCourses from './MyCourses';
import './teacherPanel.scss';

export default function TeacherDashboard() {
    return (
   <div className="teacher-dashboard-container">
      <h2>Панель учителя</h2>
      <Link className='link' to={'/teacher-dashboard/add-course'}>Добавить</Link>
      <MyCourses />
    </div> 
    )
}