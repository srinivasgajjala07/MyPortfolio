import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import BackToUp from "./components/BackToUP"
function App() {
  return (
    <>
      <Header />
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <BackToUp/>
      <Footer />
    </>
  )
}

export default App
