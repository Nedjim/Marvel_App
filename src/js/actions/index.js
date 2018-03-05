import AppDispatcher from '../dispatcher'
import Constants from '../constants'

export default {
  getData: (data) => {
    AppDispatcher.dispatch({
      actionType: Constants.GET_DATA,
      data,
    })
  },
  getDetails: (id) => {
    AppDispatcher.dispatch({
      actionType: Constants.GET_DETAILS,
      id,
    })
  },
  getComics: (comics) => {
    AppDispatcher.dispatch({
      actionType: Constants.GET_COMICS,
      comics,
    })
  },
  getSeries: (series) => {
    AppDispatcher.dispatch({
      actionType: Constants.GET_SERIES,
      series,
    })
  },
}
