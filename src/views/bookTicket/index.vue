<template>
  <div>
    <van-field label-width="110" v-model="formData.projectName" label="项目名称" placeholder="请输入项目名称" ></van-field>
    <van-field label-width="110" v-model="formData.price" type="number" label="工资金额" placeholder="请输入工资金额" ></van-field>
    <van-cell title="税率" :value="formData.taxRate" @click="showPopup = true;showPopup2 = false" is-link />
    <van-cell title="票务类型" :value="formData.ticketType" @click="showPopup2 = true;showPopup = false" is-link />
    <van-cell title="预计回款时间" :value="formData.backTime" @click="showFlag = true;" is-link />
    <van-field label-width="110" v-model="formData.name" label="姓名" placeholder="请输入签约人姓名" ></van-field>
    <van-field label-width="110" v-model="formData.mobile" type="tel" label="联系方式" placeholder="请输入签约人联系方式" ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
    <van-calendar title="选择预计回款时间" v-model="showFlag" @confirm="onConfirm" />
    <van-popup v-model="showPopup" position="bottom">
      <van-picker value-key="label" title="选择税率" :columns="taxRateList" @confirm="onPickerConfirm($event, 1)" :show-toolbar="true" />
    </van-popup>
    <van-popup v-model="showPopup2" position="bottom">
      <van-picker value-key="label" title="选择票务类型" :columns="ticketTypeList" @confirm="onPickerConfirm($event, 2)" :show-toolbar="true" />
    </van-popup>

  </div>
</template>

<script src="./bookTicket.js"></script>

<style lang="stylus">
  @import '~@/styles/bookTicket.styl';
</style>
