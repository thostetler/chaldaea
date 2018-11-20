<template lang="pug">
  .ui.container.fluid
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
