import notes from './notesReducer'
import themes from './themesReducer'
import clock from './clockReducer'
import notification from './notificationReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ notes, themes, clock, notification });

export default rootReducer;
