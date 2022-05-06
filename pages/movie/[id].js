import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

const Movie = ({movie}) => {
  const router = useRouter()
  const { id } = router.query

  return (
  <>
  <div className={styles.movie}>
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
 <button className={styles.ticketbtn}>Book tickets</button>
 </div>
 
  </div >
  <h2>About The Movie</h2>
  <p>{movie.description}</p>
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
