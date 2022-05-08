import {DialogTitle,Dialog} from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import {Pagination} from '@material-ui/lab';
import {useState} from 'react'

export const Theatre=({seats})=>{
    console.log('rerende')
    const ree=['booked','notbooked','notbooked','booked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','booked','booked','notbooked','notbooked','booked',
    'booked','booked','booked','booked','booked','booked','notbooked',
    'notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','booked','booked','notbooked','notbooked','booked',
    'booked','notbooked','notbooked','booked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','booked','booked','notbooked','notbooked','booked',
    'booked','booked','booked','booked','booked','booked','notbooked',
    'notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','booked','booked','notbooked','notbooked','booked',
    'booked','notbooked','notbooked','booked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','booked','booked','notbooked','notbooked','booked',
    'booked','booked','booked','booked','booked','booked','notbooked',
    'notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked','notbooked',
    'notbooked','notbooked','notbooked','booked','booked','notbooked','notbooked','booked',]
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
        if(!(seating[index]==='booked')){
var a=ree
var b=index+seats
console.log(index,b,a)
console.log(index)
for(let i=index;i<b;i++){
    console.log(a[i])
    a[i]='stillbooking'
    console.log(a[i])
}
setSeating([...a])
console.log(seating,'everydaybro')
        }
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
    <div className={styles.shows}>
    <button className={styles.showbtn}>
        07:00 AM
        </button>   
        <button className={styles.unshowbtn}>
        07:00 AM
        </button>    
        <button className={styles.unshowbtn}>
        07:00 AM
        </button>     
    </div>
       <div className={styles.seatscontainer}>
       <div className={styles.seats}>
    {seating.map((s,index)=>
       <div className={s==='booked'?styles.filled:s==='stillbooking'?styles.stillbooking:styles.seat} 
       onClick={()=>handleselect(index)}>
           {index}
       </div>
    )}
    
       </div>
       </div>
     <div className={styles.payment}>
<button className={styles.paymentbtn}>Pay Rs.2450.00</button>
     </div>
        </>

    )
}

export default Theatre