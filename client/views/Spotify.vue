import {mapGetters} from 'vuex'

import Search from '../components/Search.vue'

export default {
  name: 'spotify',
  components: [
    Search
  ],
  computed: mapGetters({
    artists: 'artists',
    isBusy: 'isBusy'
  }),
  render (h) {
    return (
      <div id='spotify'>
        <Search />
        { this.isBusy
          ? <h1>Loading...</h1>
          : this.artists.map((item) => <p>{item.name}</p>)
        }
      </div>
    )
  }
}