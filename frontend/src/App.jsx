import React from "react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import OurMenu from "./pages/OurMenu";
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import Dashboard from "./pages/Dashboard";
import NavBar from "./component/NavBar";
import UserNavBar from "./component/UserNavBar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import UserProvider from "../context/userContext";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <>
      <UserProvider>
        {user ? <UserNavBar /> : <NavBar />}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/OrderOnlinePage" element={<OrderOnlinePage />} />
          <Route path="/OurMenu" element={<OurMenu />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUS" element={<ContactUS />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;
