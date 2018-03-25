// Code adapted from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff
// React Router stuff based on tutorials:
// https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
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
import CreateApp from './CreateApp';
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
        <Route exact path='/' component={FeedApp} />
        <Route path="/create" component={CreateApp} />
        <Route path='/blog/:blogId' component={BlogApp} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)

registerServiceWorker();
