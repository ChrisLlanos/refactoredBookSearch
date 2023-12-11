import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from './components/Navbar';
const client = new ApolloClient({
  uri: '/graphql', 
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
