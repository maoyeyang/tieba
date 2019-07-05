<template>
  <div>
    1111
  </div>
</template>

<script>
import { getBaInfo } from 'api'
export default {
  name: 'BaInfo',
  data () {
    return {
      baInfo: {}
    }
  },
  methods: {
    setLocalStorage () {
      let newWatchList = JSON.parse(localStorage.getItem('joinBa'))
      const obj = {
        id: this.baInfo.id,
        ba_name: this.baInfo.ba_name,
        theme_url: this.baInfo.theme_url,
        fans_count: this.baInfo.fans_count
      }
      if (newWatchList) {
        newWatchList = newWatchList.filter(item => item.id !== obj.id)
        if (newWatchList.length >= 20) {
          newWatchList.pop()
        }
        newWatchList.unshift(obj)
        localStorage.setItem('joinBa', JSON.stringify(newWatchList))
        return
      }
      localStorage.setItem('joinBa', JSON.stringify([obj]))
    }
  },
  created () {
    getBaInfo(parseInt(this.$route.params.id)).then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.baInfo = data.data
        this.setLocalStorage()
      }
    })
  }

}
</script>

<style lang="stylus" scoped></style>
