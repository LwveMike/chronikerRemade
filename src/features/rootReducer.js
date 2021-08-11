import notes from './notesReducer'
import themes from './themesReducer'
import clock from './clockReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ notes, themes, clock });

export default rootReducer;
