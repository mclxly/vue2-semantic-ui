<template lang='pug'>
  div.container
    input(type='text' v-model='name')
    button(@click='search(name)') Search
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    search (name) {
      if(name.length <= 0) return
      this.$store.dispatch('searchByArtistName', {name})
    }
  }
}
</script>