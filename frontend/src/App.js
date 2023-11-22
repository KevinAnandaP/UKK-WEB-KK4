import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./components/userlist.jsx";
import AddUser from "./components/adduser.jsx";
import EditUser from "./components/edituser.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
