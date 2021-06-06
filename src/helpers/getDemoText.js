
export const getDemoText = ( textId, texts ) => {
   const text = texts.find( text => text.id === textId )
   if( !text ) return { content: false }
   return text
}
