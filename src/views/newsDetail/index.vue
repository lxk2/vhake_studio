<template>
  <div class="main">
    <div class="title">{{ netData.title }}</div>
    <div class="info">
      <div class="info-item">
        作者：{{ netData.auther }}
      </div>
      <div class="info-item">
        浏览量：{{ netData.look_num }}
      </div>
    </div>
    <div class="main-content" v-html="netData.content">

    </div>
    <div class="main-time">
      发布时间：{{ netData.create_time }}
    </div>
  </div>
</template>

<script src="./newsDetail.js"></script>

<style lang="stylus" scoped>
  @import '~@/styles/newsDetail.styl';
</style>
