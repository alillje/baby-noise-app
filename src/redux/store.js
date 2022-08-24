/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import audioReducer from './reducers/audio'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    audio: audioReducer,
  }
})

export default store
