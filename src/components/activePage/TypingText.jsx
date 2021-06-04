import React from 'react'
import { useSelector } from 'react-redux'

export const TypingText = () => {
   const { typingText } = useSelector( state => state.typingL )
   const { active } = useSelector( state => state.ui )
   const demoText = typingText.split( '' )

   return (
      <div className={`typingText-container ${ ( active ) && 'activeContainer'  }`} >
         {
            demoText.map( ( letter, index ) => {
               
               if( letter === '\n' ) return <span key={index}> \n<br/><br/></span>
               if( letter === ' ' ) return <span className="blank" key={index}></span>
               else return <span key={index}>{letter}</span> 
               
            })
            
         }
      </div>
   )
}
