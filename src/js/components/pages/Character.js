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

  return (
    <div className="box-image">
      <img src={`${path}.${extension}`} alt="test" />
      <div>{ name }</div>
      <Link to={`/details/${name}`} >
        <button onClick={getDetails} data-id={id}>Details</button>
      </Link>
    </div>
  )
}

export default Character
