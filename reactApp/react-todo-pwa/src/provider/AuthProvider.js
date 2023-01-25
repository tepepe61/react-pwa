import React, { useState, useEffect } from "react";
import { auth } from "../service/firebase";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // ここで'AuthContext.Provider'することで{children}(子コンポーネントはreduxみたいにデータに参照できる)
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
