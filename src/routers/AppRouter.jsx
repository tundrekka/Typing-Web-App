import React from 'react'

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
 } from 'react-router-dom';
import { ActivePage } from '../components/ActivePage';
import { HomePage } from '../components/HomePage';

export const AppRouter = () => {
   return (
      <Router>
         {/* <Navbar /> */}
         <div>
            <Switch>
               <Route exact path="/typing/:demoTextId" component={ ActivePage } />
               <Route exact path="/" component={ HomePage } />
               <Redirect to="/" />
            </Switch>
         </div>
      </Router>
   )
}
