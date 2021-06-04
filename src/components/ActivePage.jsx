import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useParams } from 'react-router'
import { setTypingText } from '../actions/typingLogic'
import { getDemoText } from '../helpers/getDemoText'
import { ButtonsContainer } from './activePage/ButtonsContainer'
import { TextAndStats } from './activePage/TextAndStats'

export const ActivePage = () => {

   const dispatch = useDispatch()
   const { demoTextId } = useParams()
   const { content } = useMemo( () => getDemoText( demoTextId ), [demoTextId] )
   
   useEffect( () => {
      dispatch( setTypingText( content ) )
   }, [ dispatch, content ] )
   if( !content ) return <Redirect to="/" />

   return (
      <div className="activePage-container">
         <TextAndStats />
         <ButtonsContainer />
      </div>
   )
}
