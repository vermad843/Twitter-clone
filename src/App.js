import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './SideBar';

function App() {
  return (
    <div className="app">
       <Sidebar/>
       <Header/>
       <Sidebar/>
    </div>
  );
}

export default App;
