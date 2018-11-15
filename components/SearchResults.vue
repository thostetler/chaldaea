<template lang="pug">
  div
    div.results.ui.vertical.basic.segment
      search-result-item
</template>

<script>
import SearchResultItem from './SearchResultItem.vue'
export default {
  name: 'SearchResults',
  components: {
    SearchResultItem
  }
}
</script>

<style>
.results {
  min-height: 400px;
}
</style>
