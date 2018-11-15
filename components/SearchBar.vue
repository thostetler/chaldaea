<template lang="pug">
  form(action="/search" method="GET")
    div.ui.fluid.big.action.input.left.icon(
      :class="{ loading: loading, disabled: loading }"
    )
      input(
        type="text"
        placeholder="Search for articles..."
        name="q"
        autofocus
        ref="index"
      )
      i.search.icon
      button(role="submit").ui.primary.button Search
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchBar',
  data() {
    return {
      loading: true
    }
  },
  computed: mapState('query', ['q']),
  mounted() {
    // do this here to make sure the cursor goes to the end of the input
    this.$refs.index.value = this.q
    this.loading = false
  }
}
</script>
