import React from 'react'
import { dataForEach } from '../../helpers/dataForEach'

export const TypingText = () => {

   const datasplit = dataForEach()

   return (
      <div className="typingText-container">
         {
            datasplit.map( ( letter, index ) => {
               
               if( letter === '\n' ) return <span key={index}> -<br/></span>
               if( letter === ' ' ) return <span className="blank" key={index}>.</span>
               else return <span key={index}>{letter}</span> 
               
            })
            
         }
      </div>
   )
}
