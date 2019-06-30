<template>
  <div>
    <Top>
      <slot>我关注的人</slot>
    </Top>
  </div>
</template>

<script>
import Top from 'components/top'
export default {
  name: 'FocusList',
  components: {
    Top
  }
}
</script>

<style lang="stylus" scoped></style>
