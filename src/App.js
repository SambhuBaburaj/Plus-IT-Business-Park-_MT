
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import LoggedInUser from './ProtectedRoutes/LoggedInUser';
import LoggedOutUser from './ProtectedRoutes/LoggedOutUser';
import { Navigate } from "react-router-dom";

import Register from './Pages/Register';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Items from './Pages/Items';
import Protected from './Pages/Protected';

function App() {
  return (
<Routes>
<Route element={<LoggedInUser/>}>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Route>
      <Route element={<LoggedOutUser/>}>

      <Route element={<Home />} path="">
      <Route path="/" element={<Navigate replace to="/items" />} />
      {/* <Route element={<Home />} path="/" /> */}
      <Route element={<Profile />} path="/profile" />
      <Route element={<Items />} path="/items" />
      <Route element={<Protected/>} path="/protected" />

      </Route>
      </Route>

</Routes>
  );
}

export default App;
