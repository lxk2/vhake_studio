<template>
  <div>
    <van-field label-width="90" v-model="formData.name" required label="姓名" placeholder="请输入联系姓名" ></van-field>
    <van-field label-width="90" v-model="formData.content" required type="textarea" :autosize="{
      minHeight: 100
    }" label="反馈意见" placeholder="请输入反馈意见" ></van-field>
    <van-field label-width="90" v-model="formData.mobile" type="tel" label="电话" placeholder="请输入联系电话" ></van-field>
    <van-field label-width="90" v-model="formData.email" type="text" label="邮箱" placeholder="请输入联系邮箱" ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
  </div>
</template>

<script src="./feedback.js"></script>

<style lang="stylus">
  @import '~@/styles/feedback.styl';
</style>
