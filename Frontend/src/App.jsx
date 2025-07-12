import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="login" element={<Login /> } />
                <Route path="register" element={<Register /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
