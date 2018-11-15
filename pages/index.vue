<template lang="pug">
  div.ui.container.fluid
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
import SideBar from '../components/SideBar.vue'
import SearchResults from '../components/SearchResults.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  components: {
    SideBar,
    SearchBar,
    SearchResults
  }
}
</script>


<style>
</style>
