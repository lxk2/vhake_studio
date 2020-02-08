<template>
  <div class="main">
    <div class="bg"></div>
    <van-tabs background="#ffffff" color="#0095ee" title-inactive-color="#0095ee" title-active-color="#0095ee" v-model="active">
      <van-tab title="首页"></van-tab>
      <van-tab title="公司简介"></van-tab>
      <van-tab title="业务范围"></van-tab>
      <van-tab title="公司资质"></van-tab>
      <van-tab title="更多了解"></van-tab>
    </van-tabs>

    <div class="line">
      <van-divider :style="{ color: '#0095ee', borderColor: '#0095ee', padding: '0 16px', borderWeidth: '2px' }">资质证书</van-divider>
    </div>
    <div class="zhengshu">
      <van-image
        @click="handleImagePreview"
        class="img"
        lazy-load
        :src="require('@/assets/icon/zizhi.png')"
        fit="cover"
      />
    </div>

    <div class="logo">
      <img class="img" v-lazy="require('@/assets/new/logo22.png')" src="" alt="">
    </div>
  </div>
</template>

<script src="./qualification.js"></script>

<style lang="stylus" scoped>
  @import '~@/styles/qualification.styl';
</style>
