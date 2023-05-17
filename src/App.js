import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Navigation from "./components/Navigation";


function App() {
  const [pages] = useState([
    {name: "About Me"},
    {name: "Projects"},
    {name: "Contact"},
    {name: "Resume"}
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="appContainer">
        <Navigation 
        className="navbar"
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}/>
        <Header className="header"/>
        <Container currentPage={currentPage}/>
        <Footer className="footer" />
    </div>
  );
}

export default App;
