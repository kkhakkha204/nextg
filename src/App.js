import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import JoinPage from "./pages/JoinPage";
import ScrollToTop from "./components/ScrollToTop";
import Price from "./pages/Price";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="relative min-h-screen w-screen overflow-hidden">
                {/* Navbar */}
                <Navbar />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dịch-vụ" element={<ServicesPage />} />
                    <Route path="/giới-thiệu" element={<AboutPage />} />
                    <Route path="/liên-hệ" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/tuyển-dụng" element={<JoinPage />} />
                    <Route path="/Price" element={<Price />} />
                </Routes>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
