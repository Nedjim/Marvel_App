import React from 'react'
import { Link } from 'react-router-dom'
import AppStore from '../stores'
import Actions from '../actions'
import Details from './pages/Details'

export default class GetDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      data: AppStore.data,
      id: AppStore.currentCharacter,
    }
    this.initCurrentCharacter = this.initCurrentCharacter.bind(this)
  }

  getCharacterDetails() {
    return this.state.data.filter(e => e.id == this.state.id)[0]
  }

  initCurrentCharacter() {
    Actions.getDetails(-1)
    Actions.getComics([])
    Actions.getSeries([])
    this.setState({ id: -1 })
  }

  render() {
    const details = this.getCharacterDetails()

    return (
      <div id="details" className="content">
        <Link to="/" >
          <button onClick={this.initCurrentCharacter}>Retourner à la liste des personnages</button>
        </Link>
        <Details details={details} />
      </div>
    )
  }
}
