export const searchByArtistName = ({commit}, {name}) => {
  commit('requestSearchResults')
  return fetch('https://api.spotify.com/v1/search?q=' + name + '&type=artist&limit=10')
    .then(res => {
      return res.json()
    }).then(res => {
      commit('receiveSearchResults', {artists: res.artists.items})
    })
};

export const incrementAsync = ({commit}) => {
  return setTimeout(() => {
    commit('INCREMENT')
  }, 200)
};