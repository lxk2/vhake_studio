<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      由公司财务经理专业解释，填写相关信息提交
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-field
      label-width="90"
      v-model="formData.name"
      required
      label="姓名"
      placeholder="请输入联系姓名"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.content"
      required
      type="textarea"
      :autosize="{
        minHeight: 100
      }"
      label="咨询内容"
      placeholder="请输入咨询内容"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.mobile"
      type="tel"
      label="电话"
      required
      placeholder="请输入联系电话"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.email"
      type="text"
      label="邮箱"
      placeholder="请输入联系邮箱"
    ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
  </div>
</template>

<script src="./taxAdvice.js"></script>

<style lang="stylus">
@import '~@/styles/taxAdvice.styl';
</style>
