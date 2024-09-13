import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
    </>
  )
}

export default App
