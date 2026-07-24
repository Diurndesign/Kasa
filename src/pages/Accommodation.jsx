import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import './accommodation.scss'

const Accommodation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Logement introuvable')
        return response.json()
      })
      .then((data) => setLogement(data))
      .catch(() => navigate('/erreur'))
  }, [id, navigate])

  if (!logement) return null

  return (
    <main className="accommodation">
      <Slideshow pictures={logement.pictures} />

      <div className="accommodation__header">
        <div>
          <h1 className="accommodation__title">{logement.title}</h1>
          <p className="accommodation__location">{logement.location}</p>
          <ul className="accommodation__tags">
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="accommodation__aside">
          <div className="accommodation__host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="accommodation__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  )
}

export default Accommodation