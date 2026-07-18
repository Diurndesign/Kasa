import { useState, useEffect } from 'react'

const Home = () => {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setLogements(data))
  }, [])

  console.log(logements)

  return <h1>Accueil</h1>
}

export default Home