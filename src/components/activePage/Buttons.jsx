import { Button } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { restart, setActive, setFalse } from '../../actions/ui'
import { dataForEach } from '../../helpers/dataForEach'
import { logic } from '../../helpers/logic'

export const Buttons = () => {
   // Hooks
   const dispatch = useDispatch()
   const { finished, active } = useSelector( state => state.ui )

   const [ startStop, setStartStop ] = useState( false )

   /* This effect is responsible of the main Typing logic  */
   let iterator = useRef( 0 )
   const container = document.querySelector( '.typingText-container' )
   useEffect( () => {
      
      const datatext = dataForEach()
      const datalength = datatext.length

      const callbackFunction = ( event ) => {
         logic( event, container, datatext, datalength, iterator, dispatch )
      }

      if( active ) {
         document.addEventListener( 'keypress', callbackFunction )
      } else {
         document.removeEventListener( 'keypress', callbackFunction )
      }

      return () => {
         document.removeEventListener( 'keypress', callbackFunction )
      }

   }, [ active, dispatch, container ] )
   // end hooks

   // handlers
   const handleStart = ( e ) => {
      setStartStop( false )
      dispatch( setActive() )
      document.getElementById( 'start' ).blur()
   }
   const handleStop = () => {
      setStartStop( true )
      dispatch( setFalse() )
   }
   const handleRestart = () => {
      setStartStop( false )
      dispatch( restart() )
      iterator.current = 0
      // reset and remove the classes for all the span elements
      const spans = [...container.children]
      spans.forEach( span => {
         span.className = ''
      })
   }

   return (
      <>
         {
            ! active
            ? <Button id="start" onClick={ handleStart } variant="contained" color="primary">Start</Button>
            : <Button onClick={ handleStop } variant="contained" color="primary">Stop</Button>
         }
         {
            ( finished || startStop )
            && <Button autoFocus id="restart" onClick={handleRestart} variant="contained" color="secondary" >Restart</Button>
         }
         <Link to="/">
            <Button variant="contained" color="primary" >Home</Button>
         </Link>
      </>
   )
}
