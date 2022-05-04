import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useState,useEffect} from 'react'

export default function Home() {
  const[imgnumber,setImgnumber]=useState(1)
  const [numbers,setNumbers]=useState(0)
  useEffect(()=>{
    if(imgnumber>4){
      setImgnumber(1)
      }
      if(imgnumber<0){
        setImgnumber(1)
        }
  },[imgnumber])

  useEffect(()=>{
var num=[]
for(let i=0;i<1000;i++){
  num.push(i)
}
setNumbers(num)

  },[])
  return (
    <div className={styles.container}>
      {imgnumber}
      <div className={styles.numbers}>
      {numbers&&numbers?.map((n,index)=> <>
    
      {((!(n.toString().indexOf(99)>-1))&&(!(n.toString().indexOf(3)>-1))&&(n.toString().length>2)
      &&(!(n.toString().indexOf(55)>-1))&&((n.toString().indexOf(7)>-1))&&(!(n.toString().indexOf(0)>-1)))&&
      ((n.toString().indexOf(2)>-1))&&
      <div className={styles.number}>
      <h5>{n}</h5></div> }
        </>)}
      </div>
     </div>
  )
}

