import './App.css';
import {HashRouter, Routes, Navigate, Route} from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Login from "./Pages/LoginPage"
import Dashboard from "./Pages/DashboardPage"
import Profile from "./Pages/ProfilePage"
import Result from "./Pages/ResultPage"

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path = "/dashboard" element={<Dashboard/>}/>
          <Route exact path = "/profile" element  = {<Profile/>}/>
          <Route exact path = "/result" element  = {<Result/>}/>
      </Routes>
    </HashRouter>
  );
}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
export default App;
