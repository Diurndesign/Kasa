import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Banner from '../components/Banner'
import BannerPicture from '../assets/pictureheader.png'
import './home.scss'

const Home = () => {
  const [accommodation, setAccommodation] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setAccommodation(data))
  }, [])

return (
  <main>
    <Banner cover={BannerPicture} text="Chez vous, partout et ailleurs" />

    <section className="cards-grid">
      {accommodation.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Card cover={logement.cover} title={logement.title} />
        </Link>
      ))}
    </section>
  </main>
)}

export default Home