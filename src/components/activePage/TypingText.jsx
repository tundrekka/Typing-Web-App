import React from 'react'
import { useSelector } from 'react-redux'
import { ReloadButton } from '../utils/ReloadButton'

export const TypingText = React.memo( () => {
   const { text } = useSelector( state => state.texts )
   const { active, loading, errorMsg } = useSelector( state => state.ui )
   const demoText = text.split( '' )

   return (
      <>
      <div className={`typingText-container ${ ( active ) && 'activeContainer'  }`} >
         {
            loading ? <p style={{ textAlign: 'center' }}>Loading...</p>
            : demoText.map( ( letter, index ) => {
               
               if( letter === '\n' ) return <span className="line-break" key={index}> \n<br/></span>
               if( letter === '\t' ) return <span className="line-break" key={index}> \t </span>
               if( letter === ' ' ) return <span className="blank" key={index}></span>
               else return <span key={index}>{letter}</span> 
               
            })
         }
      </div>


      {/* Error message*/}
      {
         errorMsg 
         && 
         <div className="errorMessage" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '.5rem'
            }
         }>
            <div style={{ textAlign: 'center', background: '#0dcaf055', 
                     padding: '.5rem',  borderRadius: '.5rem', width: 'max-content' }} >

               <p>{ errorMsg }<br />
               Last text used is loaded instead
               </p>
               <ReloadButton />
            </div>

         </div>
      }
      </>      

   )
})
