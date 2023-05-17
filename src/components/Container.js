import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";

function Container({currentPage}) {
    function generatePage() {
        switch (currentPage.name) {
            case "About Me":
                return <AboutMe />;
            case "Projects":
                return <Projects />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <AboutMe />;
        }
    }

    return (
        <div>
            <div>{generatePage()}</div>
        </div>
    )
};

export default Container;
