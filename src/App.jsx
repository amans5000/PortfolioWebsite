import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-xl-3">
            <Sidebar />
          </div>

          <div className="col-lg-8 col-xl-9">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
