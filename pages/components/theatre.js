import {DialogTitle,Dialog} from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import {Pagination} from '@material-ui/lab';
import {useState} from 'react'

export const Theatre=({seats})=>{
    console.log('rerende')
    const ree=['booked','notbooked','booked','notbooked',
    'booked','notbooked','booked','notbooked','booked','notbooked','booked','notbooked',
    'booked','notbooked',]
const[seating,setSeating]=useState(ree)
    const handleClose = (value) => {
        console.log('okbro')
        setSeatopen(false)
      };
    const handleclick=()=>{
        setSeatopen(false)
    }
    const handleselect=(index)=>{
        console.log(seating,'cripple')
var a=ree
var b=index+seats
console.log(index,b,a)
console.log(index)
for(let i=index;i<b;i++){
    console.log(a[i])
    a[i]='booked'
    console.log(a[i])
}
setSeating([...a])
console.log(seating,'everydaybro')
    }
    return(
        <>
       <div className={styles.theatretopbar}>
          <div>
              <h2>KGF</h2>
              <h5>Sri venkateshwara digital 2k cinema:Girinagar | Today, 07 May,09:05PM</h5>
              </div> 
              <div>
<button className={styles.ticketsbtn}>
    {seats} tickets</button>
              </div>
       </div>
       <div className={styles.seatscontainer}>
       <div className={styles.seats}>
    {seating.map((s,index)=>
       <div className={s==='booked'?styles.filled:styles.seat} onClick={()=>handleselect(index)}>
           {index}
       </div>
    )}
    
       </div>
       </div>
     
        </>

    )
}

export default Theatre