import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clean } from '../../actions/ui'
import { ButtonsAndLogic } from './ButtonsAndLogic'

export const ButtonsContainer = () => {
   const dispatch = useDispatch()
   useEffect( () => {
      
      return () => {
         dispatch( clean() )
      }
   }, [dispatch] )

   return (
      <div className="buttonsContainer">
         <ButtonsAndLogic />
      </div>
   )
}
