<template>
  <section class="hello">
    <div class="scroll-box">
      <text-scroll scrolltype="scroll-up" :dataList="data"></text-scroll>
    </div>
    <div class="scroll-box">
      <text-scroll scrolltype="scroll-left" :dataList="data"></text-scroll>
    </div>
  </section>
</template>

<script>
import textScroll from './textscroll'
export default {
  data() {
    return {
      data: [
        {text: '第一'},
        {text: '第二'},
        {text: '第三'}
      ]
    }
  },
  components: {
    textScroll
  }
}
</script>

<style>
  .hello{
    width: 300px;
    background-color: #f9f9f9;
    border: 1px solid #e7e7e9;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
  }
  .scroll-box{
    background-color: #f9f9f9;
    border: 1px solid #e7e7e8;
    border-radius: 5px;
  }
</style>