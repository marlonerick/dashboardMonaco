import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chest } from "../pages/bau/chest";
import { Home } from "../pages/home/home";
import { Membros } from "../pages/membros/membros";

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/membros" element={<Membros />} />
                <Route path="/bau" element={<Chest />} />
            </Routes>
        </BrowserRouter>
    )
}