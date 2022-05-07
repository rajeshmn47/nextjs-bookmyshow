import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from 'next/link'
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';

const Movie = ({movie}) => {
  const router = useRouter()
  const { id } = router.query

  return (
  <>
  <div className={styles.movie}>
  <button className={styles.sharedbtn}><ShareOutlinedIcon/>Share</button>
    <Image src={movie.image_url} width={300} height={400}/>
    <div className={styles.moviedetails}>
   
  <h1>{movie.name}</h1>
  <div className={styles.favorites}>
  <FavoriteIcon style={{color:'#F84464'}}/> 93% 758.5k votes</div>
  <div  className={styles.yourrating}>
  <div>
    <h5>Add your rating & review</h5>
    <h5>Your ratings matter</h5>
  </div>

    <button  className={styles.rate}>
      Rate now
    </button>
  
  </div>
  <div className={styles.formats}>
  <div className={styles.languages}>
    2D, IMAX 2D
  </div>
  <div className={styles.languages}>
    Kannada ,Telugu ,Tamil ,Hindi ,Malayalam
  </div>
  </div>
<h5>2h 48m
•
Action
,
Drama
,
Period
•
UA
•
14 Apr, 2022</h5>
<Link href={`/buytickets/${movie._id}`}>
 <button className={styles.ticketbtn}>Book tickets</button>
 </Link>
 </div>
 
  </div >
<div className={styles.moviedetailstwo}>
  <div className={styles.about}>
  <h2>About The Movie</h2>
  <p>{movie.description}</p>
  </div>
  <div className={styles.about}>
  <h2>Applicable offers</h2>
  <div className={styles.offer}>
  <div>
    <img src='https://in.bmscdn.com/offers/offerlogo/bms-stream-first-movie-free-datenight.jpg?19022021140646'
    alt='' width='20'/>
    </div>
    <div>
<h2>STREAM AT YOUR COMFORT</h2>
<h5>Limited access to select free titles</h5>
</div>

  </div>
 
  </div>
  <div className={styles.about}>
  <h2>Cast</h2>
  <p>{movie.description}</p>
  </div>
  <div className={styles.about}>
  <h2>Cast</h2>
  <p>{movie.description}</p>
  </div>
  </div>
  </>
  )
}

export default Movie


  export async function getServerSideProps({ params:{id} }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 
    const res = await fetch(`http://localhost:3000/api/movie/${id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return {  props: {
      movie: post.data,
    },  }
  }
