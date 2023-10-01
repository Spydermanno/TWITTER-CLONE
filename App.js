import React from 'react';
import Sidebar from "./Sidebar.js";
import './App.css';
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
function App() {
  return (
    <div class="App">
     {/*Sidebar*/}
      <Sidebar />
      <Feed />
     
     <Widgets />
    </div>
  );
}

export default App;
