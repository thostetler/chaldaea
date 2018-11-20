<template lang="pug">
  span(v-if="!inProgress") found
    strong  {{ numResults }}
    |  results
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NumResults',
  computed: mapState({
    numResults: state => state.numResults.toLocaleString('en'),
    inProgress: state => state.inProgress
  })
}
</script>
