/* eslint-disable space-in-parens */

import { setFinished } from '../actions/ui'

export const logic = ( e, container,  datatext, datalength, ite, dispatch) => {

   if(e.key === ' ') {
      const inputHidden = document.querySelector('#hidden')
      inputHidden.focus()
      inputHidden.value = ''
   }
   if( e.key.length > 2 && e.key !== 'Enter' && e.key !== 'Backspace') return
   const keyValue = ( e.key === 'Enter' ) ? '\n' : e.key
   
   // Si se usa un backpace para corregir un error
   if( e.key === 'Backspace') {
      if( ite.current === 0) return
      container.children[ite.current].classList.remove( 'next' )
      container.children[ite.current - 1].classList.remove( 'success-text' )
      container.children[ite.current - 1].classList.remove( 'fail-text' )
      container.children[ite.current - 1].classList.add( 'next' )
      ite.current--
      return
   }         
   // Si la mecanografia coincide
   if( keyValue === datatext[ite.current] ) {
      
      container.children[ite.current].classList.remove( 'next' )
      container.children[ite.current].classList.add( 'success-text' )
      ite.current++
      container.children[ite.current].classList.add( 'next' )
      console.log('coincidio')

   } else
   
   // Si la mecanografia falla
   if( keyValue !== datatext[ite.current] && datalength > ite.current ){
      container.children[ite.current].classList.remove( 'next' )
      container.children[ite.current].classList.add( 'fail-text' )
      ite.current++
      container.children[ite.current].classList.add( 'next' )

   }

   // cuando se finaliza la mecanografia
   if( datalength === ite.current ) {
      dispatch( setFinished() )
   }
      
}
