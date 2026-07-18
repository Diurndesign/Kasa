import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Accommodation from '../pages/Accommodation'
import About from '../pages/About'
import Header from './Header'
import Footer from './Footer'
import Error from '../pages/Error'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Accommodation />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router