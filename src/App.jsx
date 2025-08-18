import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HeroSection from "./components/Hero"
import Footer from "./components/Footer"
import ShopSection from "./components/ShopSection"
import JerseyDetails from "./components/JerseyDetails"

function App() {
    return (
        <Router basename="/">
            <div className="flex flex-col w-screen">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <ShopSection />
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
