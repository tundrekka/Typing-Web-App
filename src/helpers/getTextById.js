import { db } from '../firebase/firebase-config';


export const loadTextById = async( id ) => {

   try {
      const textSnap = await db.doc( `texts/content/paragraphs/${id}` ).get()
      if( textSnap.data() !== undefined ) {
         return {
            id,
            ...textSnap.data(),
         }
      } else return { content: false, errType: 'wrongURL' } 

   } catch ( error ) {
      if( error ) {
         return { content: false, errType: 'offline' }
      } else return { content: false, errType: 'wrongURL' }
      
   }

}
