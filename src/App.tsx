import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tagline />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
