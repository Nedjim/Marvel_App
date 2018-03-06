import React from 'react'
import AppStore from '../../stores'
import Constants from '../../constants'
import Character from './Character'

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      data: AppStore.data,
    }
  }

  componentDidMount() {
    AppStore.on(Constants.CHANGE_EVENT, this.loadData.bind(this))
  }

  loadData() {
    this.setState({ data: AppStore.data })
  }

  render() {
    return (
      <div className="list">
        {
          this.state.data.map((character) => {
            const { id, name, thumbnail } = character
            return <Character key={id} id={id} name={name} thumbnail={thumbnail} />
          })
        }
      </div>
    )
  }
}

