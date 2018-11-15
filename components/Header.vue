<template lang="pug">
  header.ui.inverted.large.menu.attached
    a.header.item(href="/") ADS Chaldaea
    div.right.menu
      a.item(href="/login") Log In
      div.item
        div.ui.cta.button.blue.link(href="/signup") Sign Up
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
