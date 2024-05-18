import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import HeadphonesMain from "./pages/HeadphonesMain";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import Wireles from "./pages/Wireles";
import ZxSpeaker from "./pages/ZxSpeaker";
import Shop1 from "./pages/Shop1";
import Icon from "./pages/Icon";
import Checkout from "./pages/Checkout";
import XX57 from "./pages/XX57";

function App() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  function ProtectedRoute({ children }) {
    const isAuthenticated = token ? true : false;
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? children : null;
  }
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/salom" element={<Salom></Salom>}></Route> */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Headphones></Headphones>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/XX57"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <XX57></XX57>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphonesMain"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <HeadphonesMain></HeadphonesMain>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Speakers"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Speakers></Speakers>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Speakers2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              {/* <Speakers2></Speakers2> */}
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/ZxSpeaker"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <ZxSpeaker></ZxSpeaker>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Earphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Earphones></Earphones>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Shop1"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Shop1></Shop1>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Icon"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Icon></Icon>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Shop"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Shop></Shop>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Shop2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Shop2></Shop2>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Checkout"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Checkout></Checkout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Wireles"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Wireles></Wireles>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
