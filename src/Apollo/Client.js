import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ApolloCache from "./Cache";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_CLIENT__HTTP_LINK__URI,
  credentials: "include",
});

const authLink = setContext(() => {
  // you can manipulate your request headers from here
  const token = localStorage.getItem("authToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization: token || "",
    },
  };
});

const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: ApolloCache,
  resolvers: {},
  connectToDevTools: process.env.REACT_APP_APOLLO_ENVIRONMENT !== "production",
});

export default Client;
