import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <About/>
      <Skill/>
      <Projects />
      <Footer/>
      
      
    </div>
  );
}

export default App;
