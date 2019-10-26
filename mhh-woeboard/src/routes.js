import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './containers/App';
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <Route path="/" component={ App } >
      <Route path="/posts" component={ Posts } />
      <Route path="/add-post" component={ AddPost } />
    </Route>
  </BrowserRouter>
);

export default Routes