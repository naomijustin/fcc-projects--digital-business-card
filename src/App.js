import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

function App() {
    return (
        <div className="app--container">
            <div className="app--container-elements">                
                <Info />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}

export default App