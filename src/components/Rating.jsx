import starFull from '../assets/star-full.svg'
import starEmpty from '../assets/star-empty.svg'
import './rating.scss'

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= Number(rating) ? starFull : starEmpty}
          alt=""
        />
      ))}
    </div>
  )
}

export default Rating