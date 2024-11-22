import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hiro.jsx";
import Footer from "./component/Footer.jsx";
import Features from "./component/Features.jsx";
import About from "./component/About.jsx";
import Service from "./component/servics.jsx";
import CTA from "./component/CTA.jsx";
import Newsletter from "./component/Newsletter.jsx";
import Portfolio from "./component/Portfolio.jsx";


export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <CTA />
            <Features />
            <Service />
            <About />
            <Portfolio />
            <Newsletter />
            <Footer />
        </>
    )
}