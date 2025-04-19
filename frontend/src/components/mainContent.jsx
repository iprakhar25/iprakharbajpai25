import React from "react";
import About from "./about";
import Skills from "./skills";
import Work from "./work";
import Contact from "./contact";

const mainContent = () =>{
    return(
        <main>
            <About />
            <Work />
            <Skills />
            <Contact />
        </main>
    )
}

export default mainContent;