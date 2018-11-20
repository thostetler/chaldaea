<template lang="pug">
  form(@submit.prevent="submit")
    div.ui.fluid.big.action.input.left.icon(
      :class="{ loading: loading || inProgress, disabled: loading || inProgress }"
    )
      input(
        type="text"
        placeholder="Search for articles..."
        name="q"
        autofocus
        ref="input"
        v-model="text"
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
      text: this.q,
      loading: true
    }
  },
  computed: {
    ...mapState(['query', 'inProgress'])
  },
  created() {
    // when created, see if there was a query val in the url
    const { q } = this.$route.query
    this.text = q ? q : this.text
  },
  mounted() {
    // do this so the input goes to the end of the line
    const len = this.text && this.text.length
    this.$refs.input.setSelectionRange(len, len)
    // component is initially loading, stop after mounting
    this.loading = false
  },
  methods: {
    submit() {
      // set the updated query and start a search
      this.$store.commit('SET_QUERY', this.text)
      this.$store.dispatch('START_SEARCH')
    }
  }
}
</script>
