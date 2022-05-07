import {DialogTitle,Dialog} from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import {Pagination} from '@material-ui/lab';
import {useState} from 'react'

export const Theatre=({seats})=>{
const[seating,setSeating]=useState([1,2,3,4,5,6,7,8])
    const handleClose = (value) => {
        console.log('okbro')
        setSeatopen(false)
      };
    const handleclick=()=>{
        setSeatopen(false)
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
    {seating.map((s)=>
       <div className={styles.seat}>
           {s}
       </div>
    )}
    
       </div>
       </div>
     
        </>

    )
}

export default Theatre