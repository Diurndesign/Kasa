import { useState } from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'
import './slideshow.scss'

const Slideshow = ({ pictures }) => {
  const [index, setIndex] = useState(0)

  const next = () => setIndex(index === pictures.length - 1 ? 0 : index + 1)
  const prev = () => setIndex(index === 0 ? pictures.length - 1 : index - 1)

  return (
    <div className="slideshow">
      <img className="slideshow__image" src={pictures[index]} alt="" />

      {pictures.length > 1 && (
        <>
          <img
            className="slideshow__arrow slideshow__arrow--left"
            src={arrowLeft}
            alt="Image précédente"
            onClick={prev}
          />
          <img
            className="slideshow__arrow slideshow__arrow--right"
            src={arrowRight}
            alt="Image suivante"
            onClick={next}
          />
          <span className="slideshow__counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow