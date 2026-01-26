import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext.jsx";
import axios from "axios";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      console.log("🔍 serverUrl:", serverUrl);
      console.log("🔍 Full URL:", serverUrl + "/api/user/getcurrentuser");
      setLoading(true);
      const result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log("Fetched current user:", result.data);
    } catch (error) {
      setUserData(null);
      console.error("Fail to fetch current user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (serverUrl) {
      getCurrentUser();
    }
  }, [serverUrl]); // Add serverUrl as dependency

  const value = { userData, setUserData, getCurrentUser, loading };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
