import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import Singlenumber from './components/singlenumber'

export default function Home({numbers}) {
  const[imgnumber,setImgnumber]=useState(1)
  const[checked,setChecked]=useState()
  console.log(numbers)
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
  },[])
 
  return (
    <div className={styles.container}>
    <div className={styles.numbers}>
{numbers.map((n,index)=>
  <div className={styles.number}>
     {index}) <Singlenumber n={n}/>
</div>
)}
      </div>
     </div>
  )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/passwo')
    const json = await res.json()
    console.log(json)
  var x=json.data
  var y=x.filter((r)=>r.ticked===false&&!(r.number.toString().includes(0))&&(r.number.toString().includes(9))
  &&(r.number.toString().includes(4)))
    return {
      props: {
        numbers: y,
      },
    }
  }
