import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../calendar';
import DetailsPage from '../calendar/DetailsPage';
import CreatePage from '../calendar/CreatePage';


const Routes = (props) => (
  <Switch>
    <Route exact path={['/', '/home']} component={HomePage} {...props} />
    <Route exact path={['/details']} component={DetailsPage} {...props} />
    <Route exact path={['/create']} component={CreatePage} {...props} />
  </Switch>
);

export default Routes;
