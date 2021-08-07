import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Login />
    </ApolloProvider>
  );
}

export default App;
