import { auth } from "@/services/firebase";
import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

type AuthContextType = {
  children: React.ReactNode;
};

// create the auth context

export const AuthContext = createContext({} as any);

// create a provider for components to consume and subscribe to changes

export const AuthProvider = ({ children }: AuthContextType) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //@ts-ignore
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
