import React, { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Splash from "./components/Splash"
import About from "./components/About"
import Resume from "./components/Resume"
import Work from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {

  const [activeComponent, setActiveComponent] = useState("Splash");

  const handleButtonClick = (component) => {
    setActiveComponent(component)
  }

  return (
    <div className='App'>
      <Header handleButtonClick={handleButtonClick}/>
      <div className="content">
      {activeComponent === "Splash" && <Splash />}
      {activeComponent === "About" && <About />}
      {activeComponent === "Resume" && <Resume />}
      {activeComponent === "Work" && <Work />}
      {activeComponent === "Contact" && <Contact />}
      <Footer />
      </div>
    </div>
  );
}

export default App;