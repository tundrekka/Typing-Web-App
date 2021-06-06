import React from 'react'
import { db } from '../../firebase/firebase-config'
import { useForm } from '../../hooks/useForm'

export const TestLineBreak = React.memo( () => {

   const [ formValues, handleChange ] = useForm({
      textarea: ''
   })

   const { textarea } = formValues
   
   const handleSubmit = async( e ) => {
      e.preventDefault()
      console.log( textarea )
      await db.collection( 'texts/content/paragraphs' ).add({ content: textarea })
   }

   return (
      <form onSubmit={handleSubmit}>
         <textarea value={ textarea } onChange={handleChange} name="textarea" id="textarea" cols="30" rows="10"></textarea>
         <button id="submits" type="submit">SUBMIT</button>
         <button tabIndex={0} id="focuss" type="submit">focus</button>
      </form>
   )
})
