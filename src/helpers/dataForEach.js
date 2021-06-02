/* eslint-disable no-useless-escape */
import { dataText } from '../data/text'


export const dataForEach = () => {
   const data = dataText()
   // eslint-disable-next-line space-in-parens
   // const byeTabs = data.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g, '');
   // const idk = data.replace( /   /g, 'K' )
   // console.log(idk)
   
   const dataSplit = data.replace( /\t/g, 'TAB' ).split( '' )

   // const newDataSplit = dataSplit.map( letter => {
   //    if( letter === /([\ \t]+(?=[\ \t])|^\s+|\s+$)/g ) return 'si n'
   //    else return letter
   // })
   // console.log(newDataSplit)
   // console.log(data.)
   return dataSplit
}
