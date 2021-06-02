const funcionTascla = (e) => {
   const keyValue = (e.key === 'Enter') ? '\n' : e.key
      
      // if(textValue === '') return

      // Si la mecanografia coincide
      if( keyValue === datatext[i] ) {
      console.log(e)

         container.children[i].classList.add( 'success-text' )
         i++

      } else
      
      // Si la mecanografia falla
      if( keyValue !== datatext[i] && datalength > i ){
         container.children[i].classList.add( 'fail-text' )
         i++
      }

      // cuando se finaliza la mecanografia
      if( datalength === i) {
         console.log('TERMINASTE')
         i = 0
         const spans = [...container.children]
         spans.forEach(span => {
            span.className = ''
         })
      }
}