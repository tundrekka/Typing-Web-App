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

   console.log( 'ejecutado app router' )
   return (
      <Router>
         {/* <Navbar /> */}
         <div>
            <Switch>
               {/* Route in order to deploy on github pages */}
               {console.log( 'ejecutado el app router redireccion' )}
               <Route exact path="/Typing-Web-App/typing/:demoTextId" component={ ActivePage } />
               <Route exact path="/Typing-Web-App" component={ HomePage } />

               {console.log( 'ejecutada la redireccion' )}
               <Redirect to="/Typing-Web-App" />
            </Switch>
         </div>
      </Router>
   )
}
