import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

import Profile from "./pages/Users_panel/Profile";
import Settings from "./pages/Users_panel/Settings";
import TeacherDashboard from "./pages/Users_panel/TeacherPanel/TeacherDashboard";
import AddCourseForm from "./pages/Users_panel/TeacherPanel/AddCourseForm";


import ErrorPage from "./components/ErrorPage";

function App() {
    return (
        <BrowserRouter>

            <Nav />
            <Routes>
                <Route path="sign_in" element={<Login /> } />
                <Route path="register" element={<Register /> } />
                <Route path="/" element={<Home /> } />
                <Route path="/profile" element={<Profile /> } />
                <Route path="/profile-settings" element={<Settings /> } />
                <Route path="/teacher-dashboard" element={<TeacherDashboard /> } />
                <Route path="/teacher-dashboard/add-course" element={<AddCourseForm /> } />
        <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
