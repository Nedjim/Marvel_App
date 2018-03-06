import React from 'react'
import Request from 'superagent'
import { BASE_URL, QUERY } from '../config'
import Constants from '../constants'
import AppStore from '../stores'
import Actions from '../actions'
import List from './pages/List'

export default class GetCharacters extends React.Component {
  constructor() {
    super()
    this.state = {
      data: AppStore.data,
    }
  }

  componentDidMount() {
    const url = BASE_URL + QUERY
    Request.get(url).then((data) => {
      Actions.getData(data.body.data.results)
    })
    AppStore.on(Constants.CHANGE_EVENT, this.loadData.bind(this))
  }

  loadData() {
    this.setState({ data: AppStore.data })
  }

  render() {
    if (this.state.data !== undefined) {
      return (
        <div className="content">
          {<List />}
        </div>
      )
    } return (<div />)
  }
}
