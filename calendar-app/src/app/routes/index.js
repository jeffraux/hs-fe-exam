import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../containers/calendar';
import DetailsPage from '../containers/calendar/DetailsPage';
import CreatePage from '../containers/calendar/CreatePage';


const Routes = (props) => (
  <Switch>
    <Route exact path={['/', '/home']} component={HomePage} {...props} />
    <Route exact path={['/details']} component={DetailsPage} {...props} />
    <Route exact path={['/create']} component={CreatePage} {...props} />
  </Switch>
);

export default Routes;
