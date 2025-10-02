
import React from 'react';
import { LoginForm } from '../../LoginForm';

export const Navbar = () => {
   return (
      <nav className="twa-navbar">
         <div className="twa-navbar-container">
            <ul>
               <li>
                  <LoginForm />
               </li>
            </ul>
         </div>
      </nav>
   );
}
