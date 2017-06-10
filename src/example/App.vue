<template lang="pug">
    div.myToast
      i {{toast}}
</template>
<script>
export default {
  name: 'app',
  data () {
      return {
        toast: 'welcome to toast plugin example'
      }
  },
  methods: {
  },
  created () {
    this.$toast('welcome')
    this.$toast('to meet you')
  }
}
</script>
<style lang="scss" scoped>
  .mySwiper {
    margin: 0 auto;
  }
</style>
