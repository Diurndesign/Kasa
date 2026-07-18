import { Link } from 'react-router-dom'
import Logo from '../assets/LOGO.svg'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  )
}

export default Header