import React from "react";
import Dashboard from "./Dashboard";
import '../App.css'

import SideBar from "./SideBar";
const HomeScreen = () => {
  return (
    <div className="flex bg-slate-200 h-screen font-link">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default HomeScreen;
