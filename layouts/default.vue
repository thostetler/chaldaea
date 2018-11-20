<template lang="pug">
  .pusher
    app-header
    main.ui.container.fluid
      .ui.container
        .ui.divider.hidden
        .ui.grid.stackable
          .four.wide.column
          .ten.wide.column
            search-bar
          .two.wide.column
      nuxt
    app-footer
</template>

<script>
import AppHeader from '../components/Header.vue'
import AppFooter from '../components/Footer.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  components: {
    AppHeader,
    AppFooter,
    SearchBar
  }
}
</script>

<style>
.pusher {
  height: 100vh;
  flex-direction: column;
  display: flex;
}

.pusher > main {
  flex: 1;
}
</style>
