<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
.myNoticeBar
  margin-top: 30px
  background-color transparent!important

.myPop
  background: transparent

.van-divider::after, .van-divider::before {
  border-width: 2px 0 0!important;
}

</style>
