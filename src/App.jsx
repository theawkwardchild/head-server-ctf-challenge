import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



// import React, { Component } from "react";
// import { Slide } from "react-slideshow-image";
// import "./styles.css";

import kitchen from "/kitchen.jpg"
import table from "/tables.jpg"
import food from "/food.jpg"

import "react-slideshow-image/dist/styles.css";

import headServer from "/head-server.jpg"

import './App.css'

function App() {
<style>
.mySlides display: none
</style>
  // constructor() {
  //   super();
  //   this.slideRef = React.createRef();
  //   this.back = this.back.bind(this);
  //   this.next = this.next.bind(this);
  //   this.state = {
  //     current: 0
  //   };
  // }
  const [count, setCount] = useState(0)
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    if( x[slideIndex-1])
    x[slideIndex-1].style.display = "block";  

    console.log(slideIndex)
  }
  return (
    <>

      <div className="header">
        <a href='#'>Wait tables</a>
        <a href='#'>Customer service</a>
        <a href='/flag.txt'>Serve <s>files</s> food</a>
      </div>
      <div> 
        <h2>Welcome to Server school where we'll train you<br /> to become the best server</h2>
        <img height={"550px"} src={headServer} alt="head server" />
      </div>
      <div className="w3-content w3-display-container" style={{height: "600px"}}><br/>
  <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>&#10094;</button>
  <button className="w3-button w3-black w3-display-right" onClick={() =>  plusDivs(1)}>&#10095;</button>
  <br/>
  <img className="mySlides" src={kitchen} style={{height: "100%"}}/>
  <img className="mySlides" src={table} style={{height: "100%", display: "none"}}/>
  <img className="mySlides" src={food} style={{height: "100%", display: "none"}}/>
  {/* <img className="mySlides" src="img_forest.jpg" style={{width: "100%"}}/> */}

</div>

      <div className="footer">
        <p>Made with vite 4.3.2 - Last updated 06/05/2023</p>
        {/* <p>Last updated 06/05/2023</p> */}
      </div>

    </>
  )
}

export default App
