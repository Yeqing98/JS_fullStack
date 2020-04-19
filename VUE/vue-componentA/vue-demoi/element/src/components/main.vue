<template>
  <div class="main-content">
    <Header></Header>
    <Slider></Slider>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Slider from '@/components/common/Slide'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Header,
    Slider
  }
}
</script>

