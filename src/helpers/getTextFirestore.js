import { db } from '../firebase/firebase-config';


export const loadTextsId = async() => {

   try {
      const textsSnap = await db.collection( 'texts/ids/ids-title' ).orderBy( 'title' ).get()
      const texts = [];
      textsSnap.forEach( snapChild => {
         texts.push({
            id: snapChild.id,
            ...snapChild.data()
         })
      })
      return texts
   } catch ( error ) {
      console.log( error )
   }

}
