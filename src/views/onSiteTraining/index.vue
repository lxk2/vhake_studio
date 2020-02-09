<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      请根据下方表格录入安全培训、安全警示教育、预计培训时间、具体时间、联系方式信息，提交即可
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-field
      label-width="90"
      v-model="formData.safetyTraining"
      type="textarea"
      :autosize="{
        minHeight: 100
      }"
      label="安全培训"
      placeholder="请输入安全培训"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.warningEducation"
      type="textarea"
      :autosize="{
        minHeight: 100
      }"
      label="安全警示教育"
      placeholder="请输入安全警示教育"
    ></van-field>
    <van-cell title="预计培训时间" :value="formData.trainingTime" @click="showFlag = true;" is-link />
    <van-cell title="具体时间" :value="formData.specificTime" @click="showPopup = true" is-link />
    <van-field
      label-width="90"
      v-model="formData.name"
      label="姓名"
      placeholder="请输入签约人姓名"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.mobile"
      type="tel"
      label="联系方式"
      placeholder="请输入签约人联系方式"
    ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>

    <van-popup v-model="showPopup" position="bottom">
      <van-picker
        value-key="label"
        title="选择具体时间"
        :columns="specificTimeList"
        @confirm="onPickerConfirm"
        :show-toolbar="true"
      />
    </van-popup>

    <van-calendar title="选择预计培训时间" v-model="showFlag" @confirm="onConfirm" />
  </div>
</template>

<script src="./onSiteTraining.js"></script>

<style lang="stylus">
@import '~@/styles/onSiteTraining.styl';
</style>
