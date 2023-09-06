import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Componenets/js/Signin";
import Dashboard from "./Componenets/js/Dashboard";
import Navbar from "./Componenets/js/Navbar";
import Sidenav from "./Componenets/js/Sidenav";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
     {!isLoggedIn && <Signin setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && (
     <div>
      <Navbar />
      <Sidenav >
        <Routes>
          <Route path="/" element = { <Dashboard /> } />
        </Routes>
      </Sidenav>
     </div>
        )}
    </BrowserRouter>
  );
}

export default App;
