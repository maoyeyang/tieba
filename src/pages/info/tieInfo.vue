<template>
  <div>
    1231231241232141
  </div>
</template>

<script>
import { getTieInfo } from 'api'
export default {
  name: 'BaInfo',
  data () {
    return {
      tieInfo: {}
    }
  },
  methods: {
    setLocalStorage () {
      let arr = JSON.parse(localStorage.getItem('joinTie'))
      const obj = {
        id: this.tieInfo.id,
        ba_name: this.tieInfo.ba_name,
        title: this.tieInfo.title,
        time: new Date()
      }
      if (arr) {
        arr = arr.filter(item => item.id !== obj.id)
        arr.unshift(obj)
        localStorage.setItem('joinTie', JSON.stringify(arr))
        return
      }
      localStorage.setItem('joinTie', JSON.stringify([obj]))
    }
  },
  created () {
    getTieInfo(parseInt(this.$route.params.id)).then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.tieInfo = data.data
        this.setLocalStorage()
      }
    })
  }

}
</script>

<style lang="stylus" scoped></style>
