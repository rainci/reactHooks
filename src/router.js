import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import  Example from './components/Example'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Example} />
        {/* <Route path="/" exact component={IndexPage} />  */}

      </Switch>
    </Router>
  );
}

export default RouterConfig;
