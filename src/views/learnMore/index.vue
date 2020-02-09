<template>
  <div>
    <van-tabs
      background="#ffffff"
      color="#0095ee"
      title-inactive-color="#0095ee"
      title-active-color="#0095ee"
      v-model="active"
    >
      <van-tab title="首页"></van-tab>
      <van-tab title="公司简介"></van-tab>
      <van-tab title="业务范围"></van-tab>
      <van-tab title="公司资质"></van-tab>
      <van-tab title="更多了解"></van-tab>
    </van-tabs>
    <div class="container" v-html="netData.content"></div>
  </div>
</template>

<script src="./learnMore.js"></script>

<style lang="stylus">
@import '~@/styles/learnMore.styl';
</style>
