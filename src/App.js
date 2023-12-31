import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TC from "./pages/TC";
import FAQ from "./pages/FAQ";
import PrP from "./pages/PrP";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="terms-and-condition" element={<TC />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="privacy-policy" element={<PrP />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
