
import './App.css';
import {HashRouter, Routes, Navigate, Route} from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Login from "./Pages/LoginPage"

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
export default App;
