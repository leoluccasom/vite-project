
import { FaStar } from 'react-icons/fa6'



const imageUrl = import.meta.env.VITE_IMAGE


const MovieCard = ({movie = true}) => {
  return (
    <div className='movie-card'>
      <img src={imageUrl + movie.poster_path}  alt={movie.title} />
      <h2>{ movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      <a href="#">Detalhes</a>
    </div>
  )
}

export default MovieCard
