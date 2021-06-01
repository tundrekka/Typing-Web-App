import React from 'react'
import { dataText } from '../data/text'

export const ActivePage = () => {

   const datatext = dataText()

   return (
      <div>
         <pre>{datatext}</pre>
      </div>
   )
}
