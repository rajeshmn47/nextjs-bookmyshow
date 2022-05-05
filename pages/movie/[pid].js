import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Movie