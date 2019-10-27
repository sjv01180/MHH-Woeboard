import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components';
import Edit from './components/Edit.js';
import Create from './components/Create.js';
import Show from './components/Show.js';
import PostMemes from './components/PostMemes';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
      <Route path="/show/:id" component={Show} />
      <Route path="/get_happy/post_memes" component={PostMemes} />
      
    </Switch>
  </BrowserRouter>
);

export default Routes