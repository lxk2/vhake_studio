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
      <van-tab title="新闻资讯"></van-tab>
      <van-tab title="公司简介"></van-tab>
      <van-tab title="业务范围"></van-tab>
      <van-tab title="公司资质"></van-tab>
      <van-tab title="更多了解"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="refreshFlag" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="new-list">
          <div
            class="new-item"
            v-for="item in list"
            :key="item.id"
            @click="toDetail(item.id)"
          >
            <div class="left">
              <div class="new-title">
                {{ item.title }}
              </div>
              <div class="new-time">
                {{ item.create_time }}
              </div>
            </div>
            <div class="right">
              <van-image class="img" fit="cover" lazy-load :src="item.pic" />
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script src="./news.js"></script>

<style lang="stylus" scoped>
@import '~@/styles/news.styl';
</style>
