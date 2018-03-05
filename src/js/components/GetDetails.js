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
      query: AppStore.query,
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
      <div>
        <Link to="/" >
          <button onClick={this.initCurrentCharacter}>Liste des personnages</button>
        </Link>
        <Details details={details} query={this.state.query} />
      </div>
    )
  }
}
