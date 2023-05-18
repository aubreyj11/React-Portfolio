import React from "react";

function Navigation({ setCurrentPage, currentPage, pages}) {
    return (
        <nav className="nav">
            <ul className="navBarUl">
                <li className="nav-link active">
                    <a 
                    aria-current="page"
                    href="#aboutme"
                    onClick={() => setCurrentPage(pages[0])}
                    className={currentPage.name === "About Me" ? "nav-link active" : "nav-link"}
                    >About Me</a>
                    <a 
                    href="#projects"
                    onClick={() => setCurrentPage(pages[1])}
                    className={currentPage.name === "Projects" ? "nav-link active" : "nav-link"}
                    >Projects</a>
                    <a 
                    href="#contact"
                    onClick={() => setCurrentPage(pages[2])}
                    className={currentPage.name === "Contact" ? "nav-link active" : "nav-link"}
                    >Contact</a>
                    <a 
                    href="#resume"
                    onClick={() => setCurrentPage(pages[3])}
                    className={currentPage.name === "Resume" ? "nav-link active" : "nav-link"}
                    >Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;