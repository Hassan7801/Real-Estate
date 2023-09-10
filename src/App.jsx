import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Resiencies from "./Components/Residencies/Resiencies";
import Valeo from "./Components/Valeo/Valeo";
import Contacts from "./Components/Contacts/Contacts";
import './App.css';
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header />
      <Hero/>
      </div>
      <Companies/>
      <Resiencies/>
      <Valeo/>
      <Contacts/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
