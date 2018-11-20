<template lang="pug">
  .ui.container.fluid
    .ui.divider
    .ui.grid.stackable
      .four.wide.column
        .ui.segment.raised(:class="{ loading: inProgress, disabled: inProgress }")
          side-bar
      .twelve.wide.column
        .ui.segment.attached(:class="{ loading: inProgress, disabled: inProgress }")
          search-results
    .ui.divider.hidden
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs.vue'
import SideBar from '../components/SideBar.vue'
import SearchResults from '../components/SearchResults.vue'
import SearchBar from '../components/SearchBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    SideBar,
    SearchBar,
    SearchResults,
    BreadCrumbs
  },
  computed: {
    ...mapState(['inProgress'])
  }
}
</script>


<style>
</style>
