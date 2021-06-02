/* eslint-disable space-in-parens */

export const logic = ( e, container,  datatext, datalength, ite) => {
   const keyValue = ( e.key === 'Enter' ) ? '\n' : e.key
            
         // Si la mecanografia coincide
         if( keyValue === datatext[ite.current] ) {
         console.log( e )
   
            container.children[ite.current].classList.add( 'success-text' )
            ite.current++
   
         } else
         
         // Si la mecanografia falla
         if( keyValue !== datatext[ite.current] && datalength > ite.current ){
            container.children[ite.current].classList.add( 'fail-text' )
            ite.current++
         }
   
         // cuando se finaliza la mecanografia
         if( datalength === ite.current ) {
            console.log( 'TERMINASTE' )
            ite.current = 0
            const spans = [...container.children]
            spans.forEach( span => {
               span.className = ''
            })
         }
      
}
