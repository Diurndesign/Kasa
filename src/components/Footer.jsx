import Logo from '../assets/kasa_logo.svg'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Kasa" />
      <p>© 2026 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer