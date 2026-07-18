import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
  const [accommodation, setAccommodation] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setAccommodation(data))
  }, [])

  return (
    <main>
      {accommodation.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Card cover={logement.cover} title={logement.title} />
        </Link>
      ))}
    </main>
  )
}

export default Home