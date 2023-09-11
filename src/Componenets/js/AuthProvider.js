import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./Supabase.js";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (Name, Password) =>
  supabase.auth.signInWithPassword({ Name, Password });

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;