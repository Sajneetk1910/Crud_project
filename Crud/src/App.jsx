import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser";
import GetUser from "./Components/GetUser";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/" element={<AddUser/>}/>
         <Route path="/getuser" element={<GetUser/>}/>
      </Routes>
    </>
  );
}

export default App;
// json-server --watch db.json