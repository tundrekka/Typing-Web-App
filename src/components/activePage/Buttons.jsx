import { Button } from '@material-ui/core'
import React from 'react'

export const Buttons = () => {

   const handleStart = () => {
      document.getElementById( 'typingTextArea' ).focus()
   }

   return (
      <>
         <div className="textareaContainer">
            <form>
               <textarea name="typing" id="typingTextArea" cols="30" rows="10"></textarea>
            </form>
         </div>
         <Button onClick={handleStart} variant="contained" color="primary">Start textarea</Button>
         <Button variant="contained" color="primary">Option 2</Button>
      </>
   )
}
