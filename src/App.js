import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Componenets/js/Signin";
import Signup from "./Componenets/js/Signup";
import Dashboard from "./Componenets/js/Dashboard";
import Navbar from "./Componenets/js/Navbar";
import Sidenav from "./Componenets/js/Sidenav";
import LearnerList from "./Componenets/js/LearnerList";
import Classcard from "./Componenets/js/Classcard";
import Teacher from "./Componenets/js/Teacher";
import Add from "./Componenets/js/Add";

export const MyContext = createContext({});

function App() {

  const [contextValue, setContextValue] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const updateContextValue = (newValue) => {
    setContextValue(newValue);
  };
  

  return (
    <MyContext.Provider value={{contextValue, updateContextValue}}>
    <BrowserRouter>

      {/* {!isLoggedIn && <Signin setIsLoggedIn={setIsLoggedIn} />} */}

      {!isLoggedIn && (
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        )}

      {isLoggedIn && (
        <div>
          <Navbar />
          <Sidenav>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/class" element={<Classcard />} />
              <Route path="/add" element={<Add/>} /> 
              <Route path="/learnerlist" element={<LearnerList />} />
              <Route path="/:id" element={<Teacher />} />
            </Routes>
          </Sidenav>
        </div>
      )}

    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;