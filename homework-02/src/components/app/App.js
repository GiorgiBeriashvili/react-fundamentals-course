import React from "react";
import './App.css';
import Posts from "../posts";
import Carousel from "../carousel";

class App extends React.Component {
  render = () => {
    return <div className="App">
      <Posts displayCount="5" />
      <Carousel />
    </div>
  }
}

export default App;
