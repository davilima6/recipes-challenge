import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = createHttpLink({
  uri: `${process.env.CONTENTFUL_BASE_URL}${process.env.CONTENTFUL_SPACE_ID}`,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
