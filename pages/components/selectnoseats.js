import {DialogTitle,Dialog} from '@material-ui/core'
import styles from '../../styles/Home.module.css'
import {Pagination} from '@material-ui/lab';

export const Selectseats=({seatopen,setSeatopen,state,setState,noofseats,setNoofseats})=>{
    const handleClose = (value) => {
        console.log('okbro')
        setSeatopen(false)
      };
    const handleclick=()=>{
        setState(false)
        setSeatopen(false)
    }
    const handleChange = (event, value) => {
        setNoofseats(value);
      };
    
    return(
        <>
       
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={seatopen}>
        <div className={styles.selectseats}>
      <h5>How many Seats</h5>
      <Pagination count={10} color='#F84464' style={{color:'#F84464'}} onChange={handleChange}   />
      <button onClick={handleclick} className={styles.signinbtncon}>Select Seats</button> 
      </div>
    
    </Dialog>
 
        </>

    )
}

export default Selectseats