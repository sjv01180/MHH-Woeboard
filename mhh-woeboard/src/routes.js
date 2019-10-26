import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './containers/App';
var firebase = require('firebase/app') ;

import "firebase/auth" ;
import "firebase/firestore" ;

const Routes = (props) => (
  <BrowserRouter>
    <Route path="/" component={ App } />
    <Route path="/hi" component={ <div>henlo wolrd</div> } >
    </Route>
  </BrowserRouter>
);

export default Routes