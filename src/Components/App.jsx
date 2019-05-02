import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../Pages/Badges';
import BadgeNew from '../Pages/BadgeNew';
import BadgeEdit from '../Pages/BadgeEdit';
import BadgeDetailsContainer from '../Pages/BadgeDetailsContainer';
import Layout from './Layout';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:badgeId"
            component={BadgeDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
