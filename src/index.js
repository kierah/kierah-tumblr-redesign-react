import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import dotenv from 'dotenv';
import './index.css';
import BlogApp from './BlogApp';
import FeedApp from './FeedApp';
import ExploreApp from './ExploreApp';
import registerServiceWorker from './registerServiceWorker';

dotenv.config();

const GRAPHQL_URI=process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000/graphql';

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_URI
})
const client = new ApolloClient({
  networkInterface
})

console.log("Using GraphQL URI: ", GRAPHQL_URI);

const NotFound = () => (
    <h1>404.. This page is not found!</h1>
  );

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
      <Switch>
      <Route path='/blog/:blogId' component={BlogApp} />
        <Route exact path='/' component={FeedApp} />
        <Route path='/explore' component={ExploreApp} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)

registerServiceWorker();
