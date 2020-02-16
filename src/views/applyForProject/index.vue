<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      <!-- 申请款项请点“约款”，在建项目票务请点击“票务”，填写相关信息提交即可 -->
      请根据下方表格录入项目名称、预约工资款金额、工资款到账时间、跟进业务员姓名、联系方式信息，提交即可
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-field
      label-width="110"
      v-model="formData.projectName"
      label="项目名称"
      placeholder="请输入项目名称"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.reservationPrice"
      type="number"
      label="预约工资款金额"
      placeholder="请输入预约工资款金额"
    >
      <span slot="button">元</span>
    </van-field>
    <van-cell
      title-class="cell-t"
      title="来款日期"
      value-class="cell-v"
      :value="formData.arrivalTime ? formData.arrivalTime : '自到账以后三个工作日后可提取'"
      @click="showFlag = true"
      is-link
    />
    <!-- <van-field label-width="110" v-model="formData.applyPrice" type="number" label="申请进度款" placeholder="请输入申请进度款" ></van-field> -->
    <van-field
      label-width="110"
      v-model="formData.remark"
      type="textarea"
      :autosize="{
        minHeight: 70
      }"
      label="备注"
      placeholder="预约取款具体时间，如：2月20日上午转账或提现"
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
      placeholder="请输入申请人姓名"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.mobile"
      type="tel"
      label="联系方式"
      placeholder="请输入申请人联系方式"
    ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
    <van-calendar
      title="选择来款时间"
      v-model="showFlag"
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="new Date()"
      @confirm="onConfirm"
    />
  </div>
</template>

<script src="./applyForProject.js"></script>

<style lang="stylus">
@import '~@/styles/common.styl';
@import '~@/styles/applyForProject.styl';
.cell-t
  flex: auto

.cell-v
  white-space nowrap
  flex auto
</style>
