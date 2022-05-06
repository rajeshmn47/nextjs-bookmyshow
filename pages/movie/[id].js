import { useRouter } from 'next/router'

const Movie = ({movie}) => {
  const router = useRouter()
  const { pid } = router.query

  return (
  <>
 
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
