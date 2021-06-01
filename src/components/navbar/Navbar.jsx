import { Button } from '@material-ui/core'
import { AccountBox } from '@material-ui/icons'
import React from 'react'

export const Navbar = () => {


   return (
      <nav className="twa-navbar">
         <div className="twa-navbar-container">
            <ul>
               <li>
                     <Button
                        className="navbar-btn" 
                        variant="contained" 
                        color="primary"
                        startIcon={<AccountBox />}
                        >Login</Button>
               </li>
            </ul>
         </div>
      </nav>
   )
}
