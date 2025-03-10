"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import Cookies from "js-cookie";

interface UserData {
  token: string;
  user: UserProps;
}

interface AuthContextProps {
  user: UserProps | null;
  token: string | null;
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (data: UserData) => {
    try {
      if (!data.user || !data.token) {
        throw new Error("Dados de usuário ou token inválidos");
      }

      setUser(data.user);
      setToken(data.token);

      Cookies.set("user", JSON.stringify(data.user || {}), { expires: 1 });
      Cookies.set("token", data.token || "", { expires: 1 });
    } catch (error: any) {
      throw new Error(error);
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
    try {
      const storedUser = Cookies.get("user");
      const storedToken = Cookies.get("token");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } else {
        setUser(null);
        setToken(null);
        Cookies.remove("token");
        Cookies.remove("user");
      }
    } catch (error) {
      console.error("Erro ao carregar usuário do cookie:", error);
      setUser(null);
      setToken(null);
      Cookies.remove("token");
      Cookies.remove("user");
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
