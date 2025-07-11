import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
