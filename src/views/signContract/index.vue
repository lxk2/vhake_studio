<template>
  <div>
    <van-field label-width="110" v-model="formData.projectName" label="总包名称" placeholder="请输入总包名称" ></van-field>
    <van-field label-width="110" v-model="formData.projectInfo" type="textarea" :autosize="{
      minHeight: 70
    }" label="项目概况" placeholder="请输入项目概况" ></van-field>
    <van-field label-width="110" v-model="formData.contractPrice" type="number" label="合同造价" placeholder="请输入合同造价" ></van-field>
    <van-cell title="开工日期" :value="formData.openDate" @click="showFlag = true;currentIndex = 1" is-link />
    <van-cell title="竣工日期" :value="formData.endDate" @click="showFlag = true;currentIndex = 2" is-link />
    <van-cell title="签约日期" :value="formData.contractDate" @click="showFlag = true;currentIndex = 3" is-link />
    <van-field label-width="110" v-model="formData.name" label="姓名" placeholder="请输入签约人姓名" ></van-field>
    <van-field label-width="110" v-model="formData.mobile" type="tel" label="联系方式" placeholder="请输入签约人联系方式" ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
    <van-calendar :title="calendarTitle" v-model="showFlag" @confirm="onConfirm" />
  </div>
</template>

<script src="./signContract.js"></script>

<style lang="stylus">
  @import '~@/styles/signContract.styl';
</style>
