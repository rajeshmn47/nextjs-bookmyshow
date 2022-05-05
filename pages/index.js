import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {useState,useEffect} from 'react'
import Link from 'next/link'

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
    
      
      <Head>
        <title>Bookmyshow clone With Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.navbar}>
      <div className={styles.firstdiv}>
<h5>book my show</h5>
<input placeholder='Search for Movies,Places,Events,Play,Sports and Activities'/>
      </div>
      <div className={styles.seconddiv}>
<h5>Bengaluru</h5>
<button className={styles.signin}>Sign in</button>
<h5>Menu</h5>
      </div>
    </div>
    <div className={styles.bottomnavbar}>
      <div className={styles.firstdivbottom}>
<li>Movies</li>
<li>Streams</li>
<li>Events</li>
<li>Plays</li>
<li>Sports</li>
<li>Activities</li>
<li>Buzz</li>
      </div>
      <div className={styles.seconddivbottom}>
      <li>Bookmyshow</li>
<li>Corporate</li>
<li>Offers</li>
<li>Gift Cards</li>
      </div>
    </div>
<div className={styles.imagelinks}>
  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-movies-collection-202201201113.png'
  alt=''  width='60'/>
  
  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-stream-collection-202201201113.png'
  alt=''  width='60'/>
  
  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-music-shows-collection-202201201113.png'
  alt=''  width='60'/>
  
  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-comedy-shows-collection-202201201113.png'
  alt=''  width='60'/>
  <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-adventure-collection-202201201113.png'
  alt='' width='60'/>
    <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-plays-collection-202201201113.png'
  alt='' width='60'/>
    <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-plays-collection-202201201113.png'
  alt='' width='60'/>
</div>
<div className={styles.scrollimageslinks}>
<div className={styles.leftarrow}>left</div>
  <div className={styles.rightarrow}>right</div>
<div className={imgnumber===1?styles.seeimage:styles.scrollimage}>
 <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1651468547404_sunburnapp.jpg'
 alt='' width='500'/>
 </div>
 <div className={imgnumber===2?styles.seeimage:styles.scrollimage}>
<img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1651216452418_app_630x315.jpg' 
alt='' width='500'/>
</div>
<div className={imgnumber===3?styles.seeimage:styles.scrollimage}>
<img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1651221220328_offerapp.jpg'
alt='' width='500'/>
</div>
<div className={imgnumber===4?styles.seeimage:styles.scrollimage}>
<img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1651492456712_restaurantapp.jpg'
alt='' width='500'/>
</div>
</div>
<div className={styles.movieimagelinks}>
  <div>
<Link href='movie/123'>
<img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA3MjlrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098647-dvapsdepqj-portrait.jpg' alt='' width='60'/>
</Link>
</div>
<div>
<Link href='movie/abc'>
<img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzIlICAyMzdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311733-wsbcgbzuzs-portrait.jpg' alt='' width='60'/>
</Link>
</div>
<div>
<img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NTklICA2N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00131903-sqhqmdfkqa-portrait.jpg' alt='' width='60'/>
</div>
<div>
<img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00126822-yzernpaltd-portrait.jpg' alt='' width='60'/>
</div>
<div>
<img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICA3MjlrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00098647-dvapsdepqj-portrait.jpg' alt='' width='60'/>
</div>
<div>
<img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAyMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00315406-jkcmtwlygm-portrait.jpg' alt='' width='60'/>
</div>
</div>
    </div>
  )
}
