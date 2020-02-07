<template>
  <div>
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
