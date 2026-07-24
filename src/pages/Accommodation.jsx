import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import './accommodation.scss'

const Accommodation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [accommodation, setAccommodation] = useState(null)

useEffect(() => {
  fetch('http://localhost:8080/api/properties')
    .then((response) => response.json())
    .then((data) => {
      const found = data.find((item) => item.id === id)
      if (found) {
        setAccommodation(found)
      } else {
        navigate('/erreur')
      }
    })
}, [id, navigate])

  if (!accommodation) return null

  return (
    <main className="accommodation">
      <Slideshow pictures={accommodation.pictures} />

      <div className="accommodation__header">
        <div>
          <h1 className="accommodation__title">{accommodation.title}</h1>
          <p className="accommodation__location">{accommodation.location}</p>
          <ul className="accommodation__tags">
            {accommodation.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="accommodation__aside">
          <div className="accommodation__host">
            <span>{accommodation.host.name}</span>
            <img src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
          <Rating rating={accommodation.rating} />
        </div>
      </div>

      <div className="accommodation__collapses">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {accommodation.equipments.map((equipment) => (
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