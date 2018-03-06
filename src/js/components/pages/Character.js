import React from 'react'
import { Link } from 'react-router-dom'
import Actions from '../../actions'

const Character = (props) => {
  const { id, name } = props
  const { path, extension } = props.thumbnail

  const getDetails = (e) => {
    const { id } = e.currentTarget.dataset
    Actions.getDetails(id)
  }

  const imgStyle = {
    backgroundImage: `url("${path}.${extension}")`,
  }

  return (
    <div className="box-list">
      <div className="container-img">
        <div className="box-img" style={imgStyle} alt={name} />
        <div className="details-button overlay">
          <Link to={`/details/${name}`} >
            <button onClick={getDetails} data-id={id}>Details</button>
          </Link>
        </div>
      </div>
      <div className="list-name">{ name }</div>
    </div>
  )
}

export default Character
