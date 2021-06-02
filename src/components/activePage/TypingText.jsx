import React from 'react'
import { dataForEach } from '../../helpers/dataForEach'

export const TypingText = () => {

   const datasplit = dataForEach()

   return (
      <div className="typingText-container">
         {
            datasplit.map( ( letter, index ) => 
               ( letter === '\n' ) 
               ? <span key={index}> -<br/></span>
               : <span key={index}>{letter}</span> 
            )
         }
      </div>
   )
}
