<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      <!-- 申请款项请点“约款”，在建项目票务请点击“票务”，填写相关信息提交即可 -->
      请根据下方表格录入项目名称、工资金额、税率、票务类型、预计回款时间、跟进业务员姓名、联系方式信息，提交即可
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
      v-model="formData.price"
      type="number"
      label="工资金额"
      placeholder="请输入工资金额"
    >
      <span slot="button">元</span>
    </van-field>
    <van-cell
      title="税率"
      :value="formData.taxRate"
      @click="
        showPopup = true;
        showPopup2 = false;
      "
      is-link
    />
    <van-cell
      title="票务类型"
      :value="formData.ticketType"
      @click="
        showPopup2 = true;
        showPopup = false;
      "
      is-link
    />
    <van-cell
      title="预计回款时间"
      :value="formData.backTime"
      @click="showFlag = true"
      is-link
    />
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
      placeholder="请输入签约人姓名"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.mobile"
      type="tel"
      label="联系方式"
      placeholder="请输入签约人联系方式"
    ></van-field>
    <div class="open-ccb-box">
      <div class="open-ccb" @click="submitForm">提交</div>
    </div>
    <van-calendar
      title="选择预计回款时间"
      :default-date="new Date()"
      :max-date="maxDate"
      v-model="showFlag"
      @confirm="onConfirm"
    />
    <van-popup v-model="showPopup" position="bottom">
      <van-picker
        value-key="label"
        title="选择税率"
        :columns="taxRateList"
        @confirm="onPickerConfirm($event, 1)"
        :show-toolbar="true"
      />
    </van-popup>
    <van-popup v-model="showPopup2" position="bottom">
      <van-picker
        value-key="label"
        title="选择票务类型"
        :columns="ticketTypeList"
        @confirm="onPickerConfirm($event, 2)"
        :show-toolbar="true"
      />
    </van-popup>
  </div>
</template>

<script src="./bookTicket.js"></script>

<style lang="stylus">
@import '~@/styles/bookTicket.styl';
</style>
