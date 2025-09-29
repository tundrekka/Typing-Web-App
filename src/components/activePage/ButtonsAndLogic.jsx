import { Button } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { restart, setActive, setFalse } from '../../actions/ui'
import { logic } from '../../helpers/logic'

export const   ButtonsAndLogic = () => {
   // Hooks
   const dispatch = useDispatch()
   const { finished, active } = useSelector( state => state.ui )

   const [ startStop, setStartStop ] = useState( false )

   /* This effect is responsible of the main Typing logic  */
   const { text } = useSelector( state => state.texts )
   // const demoText = typingTexts[0].content.split( '' )
   const demoText = text.split( '' )

   let iterator = useRef( 0 )
   const container = document.querySelector( '.typingText-container' )

   useEffect( () => {
      
      const datalength = demoText.length

      const callbackFunction = ( event ) => {
         logic( event, container, demoText, datalength, iterator, dispatch )
      }

      if( active ) {
         document.addEventListener( 'keydown', callbackFunction )
      } else {
         document.removeEventListener( 'keydown', callbackFunction )
      }

      return () => {
         document.removeEventListener( 'keydown', callbackFunction )
      }

   }, [ active, dispatch, container, demoText ] )
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
      document.getElementById( 'restart' ).blur()

      iterator.current = 0
      // reset and remove the classes for all the span elements
      const spans = [...container.children]
      const firstSpan = spans.shift()
      firstSpan.classList.remove( 'success-text' )
      firstSpan.classList.remove( 'fail-text' )
      firstSpan.classList.add( 'next' )
      spans.forEach( span => {
         span.classList.remove( 'success-text' )
         span.classList.remove( 'fail-text' )
         span.classList.remove( 'next' )
      })
   }

   let component;
   if( active && !finished ) component = <Button onClick={ handleStop } variant="contained" color="primary">Stop</Button>

   else if( !active && !finished && startStop ) component = <Button autoFocus id="start" onClick={ handleStart } variant="contained" color="primary">Continue</Button>

   else if( !active && !finished ) component = <Button autoFocus id="start" onClick={ handleStart } variant="contained" color="primary">Start</Button>
   
   else component = ''

   return (
      <>
         {component}
         <Button id="restart" onClick={handleRestart} variant="contained" color="secondary" >Restart</Button>
         <Link to="/">
            <Button variant="contained" color="secondary" >Home</Button>
         </Link>
      </>
   )
}
