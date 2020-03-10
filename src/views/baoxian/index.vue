<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      <!-- 申请款项请点“约款”，在建项目票务请点击“票务”，填写相关信息提交即可 -->
      请根据下方表格录入保险服务、所在项目、备注、跟进业务员姓名、联系方式信息等其他信息，提交即可
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-cell
      title="保险服务"
      :value="formData.insuranceType"
      @click="
        showPopup = true
      "
      is-link
    />
    <van-field
      label-width="110"
      v-model="formData.ofProject"
      label="所在项目"
      placeholder="请输入所在项目"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.remark"
      type="textarea"
      :autosize="{
        minHeight: 100
      }"
      label="备注"
      placeholder="请输入备注"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.followUpName"
      label="跟进业务员姓名"
      placeholder="请输入跟进业务员姓名"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.name"
      label="姓名"
      placeholder="请输入姓名"
    ></van-field>
    <van-field
      label-width="110"
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
        title="选择保险服务"
        :columns="insuranceTypeList"
        @confirm="onPickerConfirm"
        :show-toolbar="true"
      />
    </van-popup>

  </div>
</template>

<script src="./baoxian.js"></script>

<style lang="stylus" scoped>
  @import '~@/styles/baoxian.styl';
</style>
