import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

import Profile from "./pages/Users_panel/Profile";
import Settings from "./pages/Users_panel/Settings";

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

        {/* ⛔ Ловушка для всех остальных путей */}
        <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
