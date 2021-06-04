import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const StartButton = () => {

   const { typingTextId } = useSelector( state => state.typingL )
   return (
      <div>
         <Link to={`/typing/${ typingTextId }`}>
            <Button variant="contained" color="secondary" >Start Typing!</Button>
         </Link>
      </div>
   )
}
