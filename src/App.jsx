
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import HomeScreen from "./screens/HomeScreen";
import SideBar from "./screens/SideBar";
const App = () => {
  return (
    <div className="flex bg-slate-200 ">
      <SideBar />
      <Dashboard />
    </div>
  );
};
export default App;
