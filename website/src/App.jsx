import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import CloudDevOpsConsulting from "./components/Consulting";
import Courses from "./components/Courses";
import LearnersTrust from "./components/Achievements";
import Contact from "./components/contact";
import SocialLinks from "./components/SocialLinks";
import Hero from "./components/hero";
import Books from "./components/books";
import Footer from "./components/footer"
import Navigation from "./components/Navigation";
import Services from "./components/Services";
function App() {
  return (
    <div
      className="font-jakarta min-h-screen"
      style={{ backgroundColor: "#F2F6FC" }} // Soft Azure background
    >
   
      <Header />

      <main >
        <Navigation />
     
        <Hero />
 
 <Services />

                <About />


         <SocialLinks />

        <Courses />

        <Books />

    
        <LearnersTrust />

        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
