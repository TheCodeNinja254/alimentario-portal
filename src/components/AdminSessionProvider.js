import React, { createContext, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_SIGNED_IN_USER } from "../api/Queries/Authentication/GetSignedInUser";
import CircularIndeterminate from "./Loader";

// Create a context to share the user info
export const UserContext = createContext(null);

const UserSessionProvider = ({ children }) => {
  const { data, loading, error } = useQuery(GET_SIGNED_IN_USER);
  const navigate = useNavigate();

  console.log(data);

  useEffect(() => {
    if (
      !loading &&
      (error || !data?.getSignedInUser || !data?.getSignedInUser?.status)
    ) {
      navigate("/admin/auth"); // Redirect if there's an error or no signed-in user
    }
  }, [loading, error, data, navigate]);

  // While loading, show a loading indicator
  if (loading) {
    return (
      <Box>
        <CircularIndeterminate />
      </Box>
    );
  }

  // Render the children with the user info context
  return (
    <UserContext.Provider value={data?.getSignedInUser}>
      <Box>{children}</Box>
    </UserContext.Provider>
  );
};

export default UserSessionProvider;
