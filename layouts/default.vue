<template lang="pug">
  div.pusher
    app-header
    main.ui.container.fluid
      div.ui.container
        div.ui.divider.hidden
        div.ui.grid.stackable
          div.four.wide.column
          div.ten.wide.column
            search-bar
          div.two.wide.column
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
