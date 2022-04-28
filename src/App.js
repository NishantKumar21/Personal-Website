import About from "./About/About";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar"
import Expeience from "./Experience/Expeience"
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
    <Header />
   <Navbar />
   <About />
   <Expeience />
   <Project />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
