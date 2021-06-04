import { firebase, db } from '../firebase/firebase-config';


export const loadNotes = async() => {
   console.log( firebase )
   console.log( 'inicio peticion' )

   const notesSnap = await db.collection( 'texts' ).get()
   const notes = [];


   notesSnap.forEach( snapChild => {
      notes.push({
         id: snapChild.id,
         ...snapChild.data()
      })
   })
   return notes

}
