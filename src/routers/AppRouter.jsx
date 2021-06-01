import React from 'react'

import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from 'react-router-dom';
import { ActivePage } from '../components/ActivePage';
import { HomePage } from '../components/HomePage';
import { Navbar } from '../components/navbar/Navbar';

export const AppRouter = () => {
   return (
      <Router>
         <Navbar />
         <div>
            <Switch>
               <Route path="/typing" component={ ActivePage } />
               <Route path="/" component={ HomePage } />
            </Switch>
         </div>
      </Router>
   )
}
