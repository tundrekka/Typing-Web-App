import React from 'react'
import { Button } from '@material-ui/core'
import { AccountBox } from '@material-ui/icons'

export const Sidebar = React.memo( () => {
   return (
      <aside className="sidebar">
         <h3>SIDEBAR / LOGIN</h3>
         <div className="sidebar-card">
            <Button
               disabled
               className="navbar-btn" 
               variant="contained" 
               color="primary"
               startIcon={<AccountBox />}
            >Login</Button>
         </div>
         <div className="sidebar-card">
            <p>Login disabled</p>
         </div>
      </aside>
   )
})
