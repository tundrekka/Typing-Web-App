
export const getTextFromStore = ( textsList = [], id ) => {

   const text = textsList.find( text => text.id === id )
   if( !text ) return false
   return text.content
}
