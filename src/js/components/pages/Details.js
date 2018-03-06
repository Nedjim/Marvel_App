import React from 'react'
import Request from 'superagent'
import AppStore from '../../stores'
import { BASE_URL, QUERY } from '../../config'
import Actions from '../../actions'
import Constants from '../../constants'
import DetailsList from './DetailsList'

export default class Details extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: props.details.name,
      description: props.details.description,
      id: AppStore.currentCharacter,
      comics: AppStore.comics,
      series: AppStore.series,
      path: props.details.thumbnail.path,
      extension: props.details.thumbnail.extension,
    }
  }

  componentDidMount() {
    const comicsUrl = `${BASE_URL}/${this.state.id}/comics${QUERY}`
    const seriesUrl = `${BASE_URL}/${this.state.id}/series${QUERY}`

    Request.get(comicsUrl).then((data) => {
      Actions.getComics(data.body.data.results)
    })
    Request.get(seriesUrl).then((data) => {
      Actions.getSeries(data.body.data.results)
    })

    AppStore.on(Constants.CHANGE_EVENT, this.loadData.bind(this))
  }

  loadData() {
    this.setState({ comics: AppStore.comics, series: AppStore.series })
  }

  render() {
    return (
      <div>
        <h2>Fiche d'identité</h2>
        <div>
          <img src={`${this.state.path}.${this.state.extension}`} alt={this.state.name} />
          <div className="presentation">
            <div className="presentation">{ this.state.name }</div>
            <div className="description">{ this.state.description }</div>
          </div>
        </div>
        <DetailsList comics={this.state.comics} series={this.state.series} />
      </div>
    )
  }
}
