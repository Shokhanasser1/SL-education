import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="sign_in" element={<Login /> } />
                <Route path="register" element={<Register /> } />
                <Route path="/" element={<Home /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
