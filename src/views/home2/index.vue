<template>
  <div class="main">
    <div class="bg"></div>
    <!-- <div class="bg-c"></div> -->
    <van-tabs
      background="#ffffff"
      color="#0095ee"
      title-inactive-color="#0095ee"
      title-active-color="#0095ee"
      v-model="active"
    >
      <van-tab title="首页"></van-tab>
      <van-tab title="新闻资讯"></van-tab>
      <van-tab title="公司简介"></van-tab>
      <van-tab title="业务范围"></van-tab>
      <van-tab title="公司资质"></van-tab>
      <van-tab title="更多了解"></van-tab>
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        class="swipe-item"
        v-for="(item, index) in banners"
        :key="index"
      >
        <van-image class="img" :src="item" lazy-load fit="cover" />
      </van-swipe-item>
    </van-swipe>
    <div class="c-name">
      广州市晋拓建筑工程有限公司
    </div>
    <div class="tips">
      客服值班时间8：00-20：00分，17：00以前的需求当天反馈，17：00以后的第二个工作日反馈，如有特急需求请直接拨打电话：（运营总监黄脞东15018489060）
    </div>
    <div class="gird-x">
      <div class="item" v-for="(item, index) in gridImages" :key="index">
        <img
          v-lazy="item"
          src=""
          alt=""
          class="img"
          @click="handleClick(index)"
        />
      </div>
    </div>
    <div class="block">
      <img
        @click="
          () => {
            $router.push({
              path: '/onSiteTraining'
            });
          }
        "
        v-lazy="require('@/assets/new/zhuchang.png')"
        class="img"
        src=""
        alt=""
      />
    </div>

    <div class="block">
      <img
        @click="
          () => {
            $router.push({
              path: '/baoxian'
            });
          }
        "
        v-lazy="require('@/assets/new/baoxian.png')"
        class="img"
        src=""
        alt=""
      />
    </div>

    <div class="block">
      <img
        @click="
          () => {
            $router.push({
              path: '/feedback'
            });
          }
        "
        v-lazy="require('@/assets/new/05.png')"
        class="img"
        src=""
        alt=""
      />
    </div>

    <div class="mobile-contract">
      <img
        v-lazy="require('@/assets/new/lianxi.png')"
        class="img"
        src=""
        alt=""
      />
    </div>

    <!-- 新闻资讯 -->
    <div class="new-block">
      新闻资讯
      <span @click="toMore">更多>></span>
    </div>
    <div class="new-list">
      <div class="new-item" v-for="(item) in newsList" :key="item.id" @click="toDetail(item.id)">
        <div class="left">
          <div class="new-title">
            {{ item.title }}
          </div>
          <div class="new-time">
            {{ item.create_time }}
          </div>
        </div>
        <div class="right">
          <van-image
            class="img"
            fit="cover"
            lazy-load
            :src="item.pic"
          />
        </div>
      </div>
    </div>

    <div class="logo">
      <img
        class="img"
        v-lazy="require('@/assets/new/logo22.png')"
        src=""
        alt=""
      />
    </div>

    <van-popup
      style="background: transparent"
      class="myPop"
      v-model="showFlag"
      :overlay="true"
      :overlay-style="{
        // background: 'transparent'
      }"
    >
      <div class="wenan" @click="showFlag = false">
        <img class="img" src="@/assets/new/shuoming.png" alt="" />
      </div>
    </van-popup>

    <van-action-sheet
      v-model="showFlag2"
      :actions="actions"
      @select="onSelect"
      :close-on-click-action="true"
      cancel-text="关闭"
    />
  </div>
</template>

<script src="./home2.js"></script>

<style lang="stylus" scoped>
@import '~@/styles/home2.styl';
</style>
