import './index.css'

const Rendering = props => {
  const {each} = props
  const {timeAccessed, logoUrl, title} = each

  return (
    <li className="list-item1">
      <p>{timeAccessed}</p>
      <div className="list-item2">
        <div className="list-item3">
          <div className="image-special-container">
            <img className="image1" src={logoUrl} alt={title} />
          </div>
          <p>{title}</p>
        </div>
        <div className="image-special-container">
          <img
            className="image2"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}

export default Rendering
