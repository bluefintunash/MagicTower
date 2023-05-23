<template>
  <div>
    <Header @change="handleChange" :index="activeIndex"></Header>
    <router-view :index="index" @scrollChange="handleScrollChange"></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from './Header'
// import Footer from './Footer'
export default {
  data () {
    return {
      index: '',    // 导航栏锚点
      activeIndex: ''    // 首页动态锚点
    }
  },
  components: {
    Header
  },
  methods: {
    // 获取传入的导航栏item点击下标
    handleChange (index) {
      this.index = index
      // console.log('锚点被点击'+ this.index)
    },
    // Home页面滚动动态动态切换锚点
    handleScrollChange (index) {
      this.activeIndex = index
      if (index !== this.index) {
        this.index = ''
      }
    }
  }
}
</script>

<style></style>