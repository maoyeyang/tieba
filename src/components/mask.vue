<template>
  <div class="mask"
       @click="hidden">
  </div>
</template>

<script>
export default {
  methods: {
    hidden () {
      this.$store.dispatch('hiddenMask')
    }
  }
}
</script>

<style lang="stylus" scoped>
.mask
  width: 100%
  height: 100%
  position: fixed
  display: block
  top: 0
  left: 0
  background-color: rgba(0, 0, 0, 0.7)
  z-index: 6
</style>
