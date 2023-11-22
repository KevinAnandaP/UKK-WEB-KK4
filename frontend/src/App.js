import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import UserList from "./components/userlist.jsx";
import AddUser from "./components/adduser.jsx";
import EditUser from "./components/edituser.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
        <Route path="/list" element={<><Navbar/><UserList/></>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
