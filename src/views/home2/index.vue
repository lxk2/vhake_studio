<template>
  <div class="main">
    <div class="bg"></div>
    <!-- <div class="bg-c"></div> -->
    <van-tabs background="#ffffff" color="#0095ee" title-inactive-color="#0095ee" title-active-color="#0095ee" v-model="active">
      <van-tab title="首页"></van-tab>
      <van-tab title="公司简介"></van-tab>
      <van-tab title="业务范围"></van-tab>
      <van-tab title="公司资质"></van-tab>
      <van-tab title="更多了解"></van-tab>
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="swipe-item" v-for="(item, index) in banners" :key="index">
        <van-image
          class="img"
          :src="item"
          lazy-load
          fit="cover"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="c-name">
      广州市晋拓建筑工程有限公司
    </div>
    <div class="gird-x">
      <div class="item" v-for="(item, index) in gridImages" :key="index">
        <img v-lazy="item" src="" alt="" class="img" @click="handleClick(index)">
      </div>
    </div>
    <div class="block">
      <img @click="() => {
          $router.push({
            path: '/feedback'
          })
        }" v-lazy="require('@/assets/new/05.png')" class="img" src="" alt="">
    </div>
    <div class="mobile-contract">
      <img v-lazy="require('@/assets/new/lianxi.png')" class="img" src="" alt="">
    </div>
    <div class="logo">
      <img class="img" v-lazy="require('@/assets/new/logo22.png')" src="" alt="">
    </div>

    <van-popup style="background: transparent" class="myPop" v-model="showFlag" :overlay="true" :overlay-style="{
      // background: 'transparent'
    }">
      <div class="wenan">
        <img class="img" src="@/assets/new/shuoming.png" alt="">
      </div>
    </van-popup>

    <van-action-sheet v-model="showFlag2" :actions="actions" @select="onSelect" :close-on-click-action="true" cancel-text="关闭" />
  </div>
</template>

<script src="./home2.js"></script>

<style lang="stylus" scoped>
  @import '~@/styles/home2.styl';
</style>
