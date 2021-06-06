import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const StartButton = React.memo( () => {
   const { typingTextId } = useSelector( state => state.texts )

   return (
      <div>
         <Link to={`/typing/${ typingTextId }`}>
            <Button variant="contained" color="primary" >Start Typing!</Button>
         </Link>
      </div>
   )
})
