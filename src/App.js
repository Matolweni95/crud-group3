import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Componenets/js/Signin";
import Dashboard from "./Componenets/js/Dashboard";
import Navbar from "./Componenets/js/Navbar";
import Sidenav from "./Componenets/js/Sidenav";
import LearnerList from "./Componenets/js/LearnerList";
import { useState } from "react";
import Classcard from "./Componenets/js/Classcard";
import Teacher from "./Componenets/js/Teacher";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {!isLoggedIn && <Signin setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && (
        <div>
          <Navbar />
          <Sidenav>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/class" element={<Classcard />} />
              <Route path="/learnerlist" element={<LearnerList />} />
              <Route path="/:id" element={<Teacher />} />
            </Routes>
          </Sidenav>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
