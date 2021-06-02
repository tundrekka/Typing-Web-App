import { Button } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataForEach } from '../../helpers/dataForEach'
import { logic } from '../../helpers/logic'

export const Buttons = () => {

   const [ startStop, setStartStop ] = useState( false )

   const handleStart = () => {
      setStartStop( true )
   }

   const handleCancel = () => {
      setStartStop( false )
   }

   let iterator = useRef( 0 )
   useEffect( () => {

      const container = document.querySelector( '.typingText-container' )
      const datatext = dataForEach()
      const datalength = datatext.length

      const callbackFunction = ( event ) => {
         logic( event, container, datatext, datalength, iterator )
      }

      if( startStop ) {
         console.log( 'agregado' );
         document.addEventListener( 'keypress', callbackFunction )
      } else {
         console.log( 'removido' );
         document.removeEventListener( 'keypress', callbackFunction )
      }

      return () => {
         document.removeEventListener( 'keypress', callbackFunction )
      }

   }, [startStop] )


   return (
      <>
         <Button onClick={handleStart} variant="contained" color="primary">Start typing!</Button>
         <Button onClick={handleCancel} variant="contained" color="primary">Stop</Button>
         <Link to="/">
            <Button variant="contained" color="primary" >Home</Button>
         </Link>
      </>
   )
}
