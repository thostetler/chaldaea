<template lang="pug">
  .ui.container.fluid
    .ui.divider.hidden
    .ui.grid.stackable
      .four.wide.column
      .ten.wide.column
        search-bar
      .two.wide.column
    .ui.divider
    .ui.grid.stackable
      .four.wide.column
        .ui.segment.raised
          side-bar
      .twelve.wide.column
        .ui.segment.attached
          search-results
    .ui.divider.hidden
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
  }
}
</script>


<style>
</style>
