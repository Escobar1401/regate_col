import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HeroSection from "./components/Hero"
import Footer from "./components/Footer"
import ShopSection from "./components/ShopSection"
import JerseyDetails from "./components/JerseyDetails"

function App() {
    return (
        <Router basename="/regate_col">
            <div className="flex flex-col w-screen">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                        <div id="hero">
                            <HeroSection />
                        </div>
                        <div id="shop">
                            <ShopSection />
                        </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/jersey/:id" element={<JerseyDetails />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
