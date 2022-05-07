import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';


export default function Home({movies}) {
    const[open,setOpen]=useState(true)
    const[otpopen,setOtpopen]=useState(false)
  const[imgnumber,setImgnumber]=useState(4)
  const [numbers,setNumbers]=useState(0)
  const handleClose = (value) => {
    console.log('okbro')
  };
const handleclick=()=>{
    setOpen(false)
    setOtpopen(true)
}
  return (
    <>
      <div className={styles.logincontainer}>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title"></DialogTitle>
    <div className={styles.signin}>
        <h5>Get started</h5>
        <button className={styles.socialloginbtn}>
        <Image
      alt="Dog"
      src="/googleicon.jpeg"
      width={20}
      height={15}
    />
           Continue with Google</button>
        <button className={styles.socialloginbtn}>
            <MailOutlinedIcon/>
            Continue with Email</button>
        <h5>or</h5> 
        <div  style={{position:'relative',width:'90%'}}>
<TextField placeholder='Continue with mobile number' style={{width:'80%',marginLeft:'3vw'}}/>
<h5 className={styles.code} >
        IN +91</h5>
        </div> 
    
        <button className={styles.signinbtncon} onClick={()=>handleclick()}>Continue</button>  
    </div>

    </Dialog>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={otpopen}>
      <DialogTitle id="simple-dialog-title"></DialogTitle>
    <div className={styles.signin}>
    <h2>Verify your number</h2> 
    <h5>Enter otp sent to +917259293140</h5>     
        <div className={styles.inputs}>
<input type='tel' maxlength='1'/>
<input type='tel' maxlength='1'/>
<input type='tel' maxlength='1'/>
<input type='tel' maxlength='1'/>
<input type='tel' maxlength='1'/>
<input type='tel' maxlength='1'/>
</div> 
        <button className={styles.signinbtncon}>Continue</button>  
    </div>

    </Dialog>
    </div>
    
    </>
  )
}

