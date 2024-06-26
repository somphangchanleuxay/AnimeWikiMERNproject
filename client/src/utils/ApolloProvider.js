
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://animewikiappwithreact-otakutechies.onrender.com/graphql',
  cache: new InMemoryCache(),
});
const ApolloAppProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloAppProvider;