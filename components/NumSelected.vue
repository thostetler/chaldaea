<template lang="pug">
  span
    strong {{ numSelected }}
    |  selected
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NumSelected',
  computed: mapState({
    numSelected: state => state.results.filter(r => r.selected).length
  })
}
</script>
