import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTypingTextId } from '../../actions/texts';
import { useForm } from '../../hooks/useForm';

export const Dropdown = () => {
   const dispatch = useDispatch()
   const { typingTextsDropdown, typingTextId } = useSelector( state => state.texts )
   const { loading } = useSelector( state => state.ui )

   const [ formValues, handleInputChange ] = useForm({
      demoTextId: ''
   })
   const { demoTextId } = formValues

   useEffect( () => {
      
      dispatch( setTypingTextId( demoTextId ) )

   }, [ demoTextId, dispatch ] )

   useEffect( () => {
      if( !typingTextId && typingTextsDropdown.length > 0 ) {
         dispatch( setTypingTextId( typingTextsDropdown[0].id ) )
      } 
      
   }, [ typingTextId, dispatch, typingTextsDropdown ] )

   return (
      <>
       <select onChange={handleInputChange} className="main-select" name="demoTextId" id="demo-text">
      {
         loading && <option>Loading...</option>
      }
      {
         typingTextsDropdown &&
         typingTextsDropdown.map( text => (
            <option key={ text.id } value={text.id}>{text.title}</option>
         ) )
      }
      </select>
      </>
   )
}
