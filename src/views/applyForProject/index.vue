<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      申请款项请点“约款”，在建项目票务请点击“票务”，填写相关信息提交即可
      <br>
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-field label-width="110" v-model="formData.projectName" label="项目名称" placeholder="请输入项目名称" ></van-field>
    <van-field label-width="110" v-model="formData.reservationPrice" type="number" label="预约工资款金额" placeholder="请输入预约工资款金额" ></van-field>
    <van-field label-width="110" v-model="formData.applyPrice" type="number" label="申请进度款" placeholder="请输入申请进度款" ></van-field>
    <van-field label-width="110" v-model="formData.name" label="姓名" placeholder="请输入申请人姓名" ></van-field>
    <van-field label-width="110" v-model="formData.mobile" type="tel" label="联系方式" placeholder="请输入申请人联系方式" ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
  </div>
</template>

<script src="./applyForProject.js"></script>

<style lang="stylus">
  @import '~@/styles/common.styl';
  @import '~@/styles/applyForProject.styl';
</style>
