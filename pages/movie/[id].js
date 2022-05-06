import { useRouter } from 'next/router'
import Image from 'next/image'

const Movie = ({movie}) => {
  const router = useRouter()
  const { id } = router.query

  return (
  <>
 <img src={movie.image_url} alt='' width='60'/>
 {movie.image_url}
     
  <h5>{movie.name}</h5>
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
