import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import APODCard from "./Components/APODCard";

// For this project, we were meant to use multiple components 
// to render data from a single API call. However, the data received 
// is organized so simply that I could not conscionably justify using 
// more than one component to build the application, since building 
// multiple components would subsequently require multiple API get 
// requests. As far as I am aware, sending nasa's API multiple 
// requests is not within the scope of this project. 

function App() {
  const [apod, setApod] = useState({});
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ea29G6hA7m4lddfmxn8FoKXM1JnEvtpZxnzYfgl8`)
      .then((response) => {
        console.log(response.data);
        setApod(response.data);
      })
      .catch((error) => {
        console.log(`Data not returned: ${error}`);
      });
  }, []);
  return (
    <div className="App">
      <APODCard key={apod.date} response={apod} />
    </div>
  );
}

export default App;
