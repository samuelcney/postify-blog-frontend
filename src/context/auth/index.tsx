"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import Cookies from "js-cookie";

interface User {
  token: string;
  data: any;
}

interface AuthContextProps {
  user: any | null;
  token: string | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (userData: any) => {
    try {
      console.log("userData", userData);
      setUser(userData.data.user);
      setToken(userData.data.token);

      Cookies.set("user", JSON.stringify(userData?.data?.user), { expires: 1 });
      Cookies.set("token", userData?.data.token, { expires: 1 });
    } catch (error: any) {
      console.log("Erro ao realizar login:", error);
      throw new Error("Erro ao realizar login", error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      setToken(null);
      Cookies.remove("token");
      Cookies.remove("user");
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
    }
  };

  useEffect(() => {
    const storedUser = Cookies.get("user");
    const storedToken = Cookies.get("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
