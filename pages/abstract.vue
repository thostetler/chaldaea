<template lang="pug">
  div.ui.container.fluid
    div.ui.divider.hidden
    div.ui.grid.stackable
      div.four.wide.column
      div.ten.wide.column
        search-bar
      div.two.wide.column
    div.ui.divider
    div.ui.grid.stackable
      div.four.wide.column
        div.ui.segment.raised
          side-bar
      div.twelve.wide.column
        div.ui.segment.attached
          search-results
    div.ui.divider.hidden
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs.vue'
import SideBar from '../components/SideBar.vue'
import SearchResults from '../components/SearchResults.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  components: {
    SideBar,
    SearchBar,
    SearchResults,
    BreadCrumbs
  },
  fetch({ query, store }) {
    store.commit('query/setQuery', query.q)
  },
  watchQuery: ['page']
}
</script>


<style>
</style>
