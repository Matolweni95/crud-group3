import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Componenets/js/Signin";
import Dashboard from "./Componenets/js/Dashboard";
import Navbar from "./Componenets/js/Navbar";
import Sidenav from "./Componenets/js/Sidenav";
import TeacherClass from "./Componenets/js/TeacherClass";
import { useState } from "react";
import Classcard from "./Componenets/js/Classcard";

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
              <Route path="/teacherclass" element={<TeacherClass />} />
            </Routes>
          </Sidenav>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
