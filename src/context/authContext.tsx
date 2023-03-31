import { auth } from "@/services/firebase";
import React, { createContext, useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "@/components/molecules/Loader/loader";

type AuthContextType = {
  children: React.ReactNode;
};

// create the auth context without null error

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: AuthContextType) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  const value = useMemo(() => ({ user, loading }), [user, loading]);

  return (
    <AuthContext.Provider value={value}>{loading ? <Loader /> : children}</AuthContext.Provider>
  );
};
