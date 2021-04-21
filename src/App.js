import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './SideBar';
import SidebarRight from './SidebarRight';

function App() {
  return (
    <div className="app">
       <Sidebar/>
       <Header/>
       <SidebarRight/>
    </div>
  );
}

export default App;
