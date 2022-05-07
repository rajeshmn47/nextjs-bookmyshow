import {DialogTitle,Dialog} from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import {Pagination} from '@material-ui/lab';

export const Selectseats=({seatopen,setSeatopen})=>{
    const handleClose = (value) => {
        console.log('okbro')
        setSeatopen(false)
      };
    const handleclick=()=>{
        setSeatopen(false)
    }
    return(
        <>
       
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={seatopen}>
        <div className={styles.selectseats}>
      <h5>How many Seats</h5>
      <Pagination count={10} color='#F84464' style={{color:'#F84464'}}  />
      <button className={styles.signinbtncon}>Select Seats</button> 
      </div>
    
    </Dialog>
 
        </>

    )
}

export default Selectseats