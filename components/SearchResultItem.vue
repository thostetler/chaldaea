<template lang="pug">
  div
    div.ui.divided.items(v-for="item in results")
      div.item
        div.content
          a.header {{ item.title }}
          div.meta
            span {{ item.authors }}
          div.description
            p {{ item.abstract }}
          div.extra
            div.ui.info.tiny.icon.button
              i.plus.icon
            div.ui.primary.tiny.button Add to Library
              i.right.book.icon
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchResults',
  computed: {
    ...mapState(['results'])
  }
}
</script>
