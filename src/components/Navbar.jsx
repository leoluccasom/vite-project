
import { BiCameraMovie } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <a href="#"><BiCameraMovie />MyFilms</a>
        </h2>
        <p className='paragrafo'>Aqui você encontra os filmes e séries mais populares do Tmdb. </p>
      </nav>
      
  )
}

export default Navbar
