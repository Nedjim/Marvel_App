import { EventEmitter } from 'events'
import _ from 'lodash'
import Constants from '../constants'
import AppDispatcher from '../dispatcher'

const AppStore = _.assign({
  data: [],
  currentCharacter: -1,
  comics: [],
  series: [],
}, EventEmitter.prototype)

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case Constants.GET_DATA: {
      AppStore.data = action.data
      AppStore.emit(Constants.CHANGE_EVENT)
      break
    }
    case Constants.GET_DETAILS: {
      AppStore.currentCharacter = action.id
      AppStore.emit(Constants.CHANGE_EVENT)
      break
    }
    case Constants.GET_COMICS: {
      AppStore.comics = action.comics
      AppStore.emit(Constants.CHANGE_EVENT)
      break
    }
    case Constants.GET_SERIES: {
      AppStore.series = action.series
      AppStore.emit(Constants.CHANGE_EVENT)
      break
    }
    default: break
  }
})

export default AppStore
