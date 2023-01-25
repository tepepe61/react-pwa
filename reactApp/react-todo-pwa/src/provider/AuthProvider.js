import React, { useMemo, useState, useEffect } from "react";
import { auth } from "../service/firebase";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // ここで'AuthContext.Provider'することで{children}(子コンポーネントはreduxみたいにデータに参照できる)
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
