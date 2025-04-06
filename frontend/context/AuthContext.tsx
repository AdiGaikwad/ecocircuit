"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is used for API calls
import domains from "@/data/conf";
// import domains, { staticDomains } from '@/app/conf';

type User = boolean | object | any;

const AuthContext = createContext<User | object>(false);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // console.log("AUTHCONTEXT: " + host)
        const response = await axios.get(
          `${domains.AUTH_HOST}/auth/get/data`,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": window.localStorage.getItem("token")
            },
          }
        );
        console.log(response)
        if (response.data.Error) {
          setUser(false);
        } else {
          setUser(response.data.user); // Set user data from API
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(false); // Handle error, set user as null
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
