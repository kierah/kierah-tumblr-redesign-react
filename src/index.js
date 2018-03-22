// Code adapted from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__'
})
const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)

registerServiceWorker();
