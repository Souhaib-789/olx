import React from 'react';
import './App.css'
import NavigationBar from './navigation/Navbar';
import ProtectedRoutes from './navigation/ProtectedRoutes';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import MyAds from './screens/MyAds/MyAds';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import PostAdd from './screens/PostAdd/PostAdd';
import Signup from './screens/Login/Signup';


function App() {
  return (

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup />} />


{/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/home" element={<Home />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path='*' element={<h1 style={{ textAlign: 'center', marginTop: '20px' }}>Error 404 Page Not Found </h1>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
