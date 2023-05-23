<template>
  <div>
    <header>
      <!-- PC滚动显示导航栏阴影 -->
      <div :class="{ black_bg: true, header_show: headerShow }"></div>
      <!-- M端滚动显示阴影 -->
      <div class="m_black m_black_show"></div>
      <section class="header-content container">
        <!-- <h1 class="logo"></h1> -->
        <!-- pc端导航栏 -->
        <nav class="nav pc_nav">
          <div class="left">
            <div>
              <img src="../assets/images/mobile_logo.png" alt="">
            </div>
            <ul>
              <li v-for="item in left" :key="item.path" @click="handlePointClick(item.id)">
                <a :href="'#'+item.name" :class="{ 'item': true, 'checkout': active == item.path }">
                  {{ item.name }}
                </a>
              </li>
              <li v-for="item in right" :key="item.path" @click="handlePointClick(item.id)">
                <a :href="'#'+item.name" :class="{ 'item': true, 'checkout': active == item.path }">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- 移动端导航栏 -->
        <div class="logo"></div>
        <div class="mobile_nav" @click="handleToggleNav">
          <div :class="{ light: true, light1_show: navShow }"></div>
          <div :class="{ light: true, light2_show: navShow }"></div>
          <div :class="{ light: true, light3_show: navShow }"></div>
        </div>

        <!-- 移动端导航列表 -->
        <nav :class="{ mobile_nav_list: true, list_show: navShow }">
          <ul>
            <li v-for="item in navList" :key="item.path" @click="handlePointClick(item.id)">
              <!-- :class="{'item': true, 'checkout': active == item.path}" -->
              <!-- <router-link :to="item.path" class="item">
                
              </router-link> -->
              <a :href="'#'+item.name"><div class="item">{{ item.name }}</div></a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerShow: false,  // pc端导航栏阴影
      contactShow: false, // PC端点击联系我们
      navShow: false,    // 移动端导航列表显示
      active: '/',      // 当前路由
      navList: [{
        path: '/Game',
        name: 'Game',
        id: 0
      }, {
        path: '/Gameplay',
        name: 'Gameplay',
        id: 1
      }, {
        path: '/Roadmap',
        name: 'Roadmap',
        id: 2
      }, {
        path: '/Tokenomics',
        name: 'Tokenomics',
        id: 3
      }, {
        path: '/Team',
        name: 'Team',
        id: 4
      }]            //  如果需要添加锚点，则需要在Home页面switch也添加对应的下标
    }
  },
  props: ['index'],
  computed: {
    left () {
      let list = this.navList.slice(0, 3)
      return list
    },
    right () {
      let list = this.navList.slice(3, 6)
      return list
    }
  },
  watch: {
    $route (to) {
      this.active = to.path
      // console.log(this.active)
      this.navShow = false
    },
    index (newVal) {
      this.active = this.navList[newVal].path
    }
  },
  mounted () {
    // 初始化
    this.active = this.$route.path
    // console.log(this.$route.path)
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    handleToggleNav () {
      this.navShow = !this.navShow
    },
    // 切换锚点
    handlePointClick (index) {
      // this.$router
      // console.log(this.$refs.test)
      this.active = this.navList[index].path
      this.$emit('change', index)
      if (index == 5) {
        if (this.navShow) {
          // console.log('?')
          // document.documentElement.scrollTop = 
          var t = document.body.clientHeight;
          window.scroll({ top: t, left: 0, behavior: 'smooth' });
        } else {
          this.contactShow = !this.contactShow
        }
      } else {
        this.contactShow = false
      }
      if (this.navShow) {
        this.navShow = false
      }
    },
    // 监听页面滚动
    handleScroll () {
      // 滚动高度
      let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollHeight)
      if (scrollHeight && scrollHeight > 50) {
        this.headerShow = true
      } else {
        this.headerShow = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: transparent;
  // box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;

  .black_bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(#000, transparent);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s;

    &.header_show {
      opacity: 1;
    }
  }

  // .m_black {
  //   display: none;
  // }
  .pc_contact {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 304px;
    background: url('../assets/images/pc_contact_bg.png') left top / 100% 100% no-repeat;
    z-index: -1;
    overflow: hidden;
    padding-top: 90px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.5s;

    ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;

      li {
        margin-right: 160px;
        img {
          width: 103px;
          height: 103px;
        }

        .name {
          font-size: 18px;
          line-height: 34px;
          color: #FFF;
          text-align: center;
        }

        &:last-child {
          margin-right: 0;
        }
      }
      li:hover{
          a{
            color:#1FC7D4 !important; 
          }
        }
    }

    &.show {
      opacity: 1;
    }
  }

  .header-content {
    margin: 0 auto;

    // display: flex;
    // justify-content: space-between;
    .logo {
      display: none;
      // width: 145px;
      // height: 40px;
      // background-color: skyblue;
      // margin-top: 20px;
    }

    .pc_nav {
      display: block;
    }

    .mobile_nav {
      display: none;
    }

    .nav {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .left {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        >div{
          img{
            width: 180px;
          }
        }
        ul {
          list-style: none;
          display: flex;

          li {
            margin-right: 100px;

            .item {
              display: inline-block;
              font-size: 18px;
              line-height: 80px;
              text-align: center;
              font-weight: bold;
              color: #fff;

              &.checkout {
                color: #1FC7D4;
                position: relative;
              }
            }

            &:last-child {
              margin-right: 0 !important;
            }
          }
          li:hover{
          a{
            color:#1FC7D4 !important;
          }
        }
        }
      }
    }

    .mobile_nav {
      display: none;
    }

    .mobile_nav_list {
      display: none;
    }
  }
}

// 响应式
@media screen and (max-width: 1250px) {
  .nav {
    margin: 0 40px;

    ul li {
      margin-right: 50px !important;

      a {
        &::after {
          width: 100px !important;
          height: 14px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  header {
    padding: 0.2rem !important;
    box-sizing: border-box;
    height: auto;
    background-color: #000;

    // .black_bg {
    //   display: none;
    // }
    // .m_black {
    //   display: block;
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   background-image: linear-gradient(#000, transparent);
    //   z-index: -1;
    //   opacity: 0;
    //   transition: opacity 0.5s;
    //   &.m_black_show {
    //     opacity: 1;
    //   }
    // }
    .pc_contact {
      display: none;
    }

    .header-content {
      display: flex;
      justify-content: space-between;

      .logo {
        display: block;
        margin-top: 0;
        height: 0.52rem;
        background-color: skyblue;
        width: 2.48rem;
        background: url('../assets/images/mobile_logo.png') left top / 100% 100% no-repeat;
      }

      .mobile_nav {
        width: 0.32rem;
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        min-width: 21px;

        .light {
          height: 3px;
          background-color: #FFF;
          margin-bottom: 0.06rem;
          transition: transform 0.5s;
          transform-origin: left center;

          &.light1_show {
            transform: rotateZ(36deg);
            margin-bottom: 0;
          }

          &.light2_show {
            margin-top: 0.06rem;
            visibility: hidden;
          }

          &.light3_show {
            transform: rotateZ(-36deg);
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .mobile_nav_list {
        display: block;
        position: absolute;
        left: 0;
        top: 0.88rem;
        background-color: #000;
        width: 100%;
        height: 0;
        overflow: hidden;
        font-size: 0.3rem;
        z-index: 99;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
        transition: height 0.5s;

        ul {
          li {
            background-color: #000;
            padding: 0 0.4rem;
            position: relative;

            .item {
              color: #FFF;
              line-height: 0.8rem;
              font-size: 0.28rem;
              height: 0.8rem;

              &.checkout {
                color: #FF7620;
              }
            }

            &::after {
              content: ' ';
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              height: 1px;
              background-color: #686868;
              transform: scaleY(0.5);
            }
          }
        }

        &.list_show {
          // display: block;
          height: 4.8rem;
        }
      }
    }
  }
}
</style>