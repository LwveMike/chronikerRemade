import notes from './notesReducer'
import themes from './themesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ notes, themes });

export default rootReducer;
