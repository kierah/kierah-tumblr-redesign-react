import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import './index.css';
import BlogApp from './BlogApp';
import FeedApp from './FeedApp';
import ExploreApp from './ExploreApp';
import registerServiceWorker from './registerServiceWorker';

const GRAPHQL_SERVER='http://localhost:4000/graphql'

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_SERVER
})
const client = new ApolloClient({
  networkInterface
})

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
