import { useState } from 'react'
import arrow from '../assets/emote.svg'
import './collapse.scss'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <img
          src={arrow}
          alt=""
          className={isOpen ? 'collapse__arrow collapse__arrow--open' : 'collapse__arrow'}
        />
      </button>

      <div className={isOpen ? 'collapse__content collapse__content--open' : 'collapse__content'}>
        <div className="collapse__inner">{content}</div>
      </div>
    </div>
  )
}

export default Collapse