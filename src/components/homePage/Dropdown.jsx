import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTypingTextId } from '../../actions/typingLogic';
import { useForm } from '../../hooks/useForm';

export const Dropdown = () => {
   const dispatch = useDispatch()

   const [ formValues, handleInputChange ] = useForm({
      demoText: '11a'
   })
   const { demoText } = formValues

   useEffect( () => {
      
      dispatch( setTypingTextId( demoText ) )

   }, [ demoText, dispatch ] )
   return (
      <select onChange={handleInputChange} className="main-select" name="demoText" id="demo-text">
         <option value="11a">Primer Texto</option>
         <option value="12b">Segundo Texto</option>
         <option value="13c">Tercero Texto</option>
         <option value="14d">Cuarto Texto</option>
      </select>
   )
}
