export const requestSearchResults = (state) => {
  state.isBusy = true
}

export const receiveSearchResults = (state, {artists}) => {
  state.artists = artists
  state.isBusy = false
}

export const INCREMENT = (state) => {
  state.count++
}