import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import About from "./components/section/About"
import Competence from "./components/section/Competence.jsx"
import Contact from "./components/section/Contact"
import Diplome from "./components/section/Diplome"
import Experience from "./components/section/Experience"
import Projet from "./components/section/Projet"

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Competence />
      <Experience />
      <Projet />
      <Diplome/>
      <Contact/>
    </>
  )
}

export default App