<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      请根据下方表格录入服务类型、内容详情、所在项目、预计培训时间、具体时间、联系方式信息，提交即可
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-cell title="服务类型" :value="formData.serviceType" @click="showPopup2 = true;showPopup = false" is-link />
    <van-field
      label-width="90"
      v-if="formData.serviceType === '其他服务'"
      v-model="formData.serviceName"
      label="服务名称"
      placeholder="请输入服务名称"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.content"
      type="textarea"
      :autosize="{
        minHeight: 100
      }"
      label="内容详情"
      placeholder="请输入内容详情"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.projectName"
      label="所在项目"
      placeholder="请输入所在项目"
    ></van-field>
    <!-- <van-field
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
    ></van-field> -->
    <van-cell title="预计培训时间" :value="formData.trainingTime" @click="showFlag = true;" is-link />
    <van-cell title="具体时间" :value="formData.specificTime" @click="showPopup = true;showPopup2 = false" is-link />
    <van-field
      label-width="90"
      v-model="formData.name"
      label="姓名"
      placeholder="请输入姓名"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.mobile"
      type="tel"
      label="联系方式"
      placeholder="请输入联系方式"
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

    <van-popup v-model="showPopup2" position="bottom">
      <van-picker
        value-key="label"
        title="选择服务类型"
        :columns="serviceTypeList"
        @confirm="onPickerConfirm2"
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
