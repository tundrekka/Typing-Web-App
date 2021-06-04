import { demoTexts } from '../data/demoTexts'


export const getDemoText = ( textId ) => {
   const text = demoTexts.find( text => text.id === textId )
   if( !text ) return { content: false }
   return text
}
