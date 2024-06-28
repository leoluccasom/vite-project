
import { BiCameraMovie } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <a href="#"><BiCameraMovie />MyFilms</a>
        </h2>
        <form>
            <input type="text" placeholder='Pesquisar filmes...' />
        </form>
      </nav>
  )
}

export default Navbar
