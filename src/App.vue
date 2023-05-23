<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// npm install sass-loader@7.3.1 --save-dev
// cnpm install node-sass@4.14.1
// import "./assets/font/font.scss"
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">

body,
html {
  background-color: #0d1418;
}
#app{
  font-family: Poppins-Light;
}
a:active,
a:hover,
a:focus {
  cursor: pointer;
  text-decoration: none !important;
}

.btn.focus,
.btn:focus,
.btn:hover {
  color: #fff;
  text-decoration: none;
}

.container {
  padding: 0 20px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  // overflow: hidden;
}

.mt80 {
  margin-top: 80px;
}

@media screen and (max-width: 1250px) {
  .container {
    max-width: 1000px;
    padding: 0 40px;
    margin-left: auto;
    margin-right: auto;
  }

  .pc_nav {
    display: block;
  }

  .mobile_nav {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .mt80 {
    margin-top: 1rem !important;
  }

  .container {
    max-width: 10rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
  }

  .pc_nav {
    display: none !important;
  }

  .mobile_nav {
    display: block !important;
  }
}</style>
