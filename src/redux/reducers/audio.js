/**
 * Redux customer module.
 * Create a customer slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'

// Create a user slice with different actions
export const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    isPlaying: false,
  },
  reducers: {
    /**
     * Starts playing audio.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    startPlaying: (state, action) => {
      state.isPlaying = true
    },
    /**
     * Stops playing audio.
     *
     * @param {object} state - Redux state object.
     */
    stopPlaying: (state) => {
      state.isPlaying = false
    }
  }
})

export const { startPlaying, stopPlaying } = audioSlice.actions
export default audioSlice.reducer
