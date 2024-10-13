import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AboutMe></AboutMe>
      <Services></Services>
      <MySkills></MySkills>
      <Qualification></Qualification>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
