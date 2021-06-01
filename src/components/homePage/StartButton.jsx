import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const StartButton = () => {
   return (
      <div>
         <Link to="/typing">
            <Button variant="contained" color="primary" >Start Typing!</Button>
         </Link>
      </div>
   )
}
