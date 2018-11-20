<template lang="pug">
  div
    div.ui.divided.items(v-for="(item, index) in results")
      div.item
        div.content
          a.header {{ item.title }}
          div.meta
            span {{ item.authors }}
          div.description
            p {{ item.abstract }}
          div.extra
            div.ui.info.tiny.icon.button(@click="selected(index)")
              i.icon(:class="{ plus: !item.selected, checkmark: item.selected }")
            div.ui.primary.tiny.button Add to Library
              i.right.book.icon
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchResults',
  computed: mapState(['results']),
  methods: {
    selected(index) {
      this.$store.commit('TOGGLE_SELECT_RESULT', index)
    }
  }
}
</script>
