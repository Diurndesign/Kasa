import { Link } from 'react-router-dom'
import Logo from '../assets/kasa_color.svg'
import './header.scss'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À Propos</Link>
      </nav>
    </header>
  )
}

export default Header