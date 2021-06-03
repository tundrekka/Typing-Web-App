import React from 'react'
import { useForm } from '../../hooks/useForm';

export const Dropdown = () => {

   const [ formValues, handleInputChange ] = useForm({
      demoText: '1'
   })
   const { demoText } = formValues
   
   return (
      <select onChange={handleInputChange} className="main-select" name="demoText" id="demo-text">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
      </select>
   )
}
