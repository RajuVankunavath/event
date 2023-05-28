// Write your code here
import './index.css'

const EventItem = props => {
  const {details, setActiveEventId, isActive} = props
  const {imageUrl, location, name, id} = details
  const onclickButton = () => {
    setActiveEventId(id)
  }

  const className = isActive ? 'active' : null

  return (
    <li className="list-items-container">
      <button className="button" type="button" onClick={onclickButton}>
        <img src={imageUrl} alt="event" className={`imageUrl ${className}`} />
      </button>

      <p className="heading">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
