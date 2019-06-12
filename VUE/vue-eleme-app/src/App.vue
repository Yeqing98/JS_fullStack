<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {
        // 从api获取
      }
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style>

</style>
