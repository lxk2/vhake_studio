<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      请录入合同甲方单位名称，项目名称，合同金额等相关信息提交即可
      <br />
      提交资料，请添加客服QQ：2971480585
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-field
      label-width="110"
      v-model="formData.projectName"
      label="总包名称"
      placeholder="请输入总包名称"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.projectInfo"
      type="textarea"
      :autosize="{
        minHeight: 70
      }"
      label="项目概况"
      placeholder="请输入项目概况"
    ></van-field>
    <van-field
      label-width="110"
      v-model="formData.contractPrice"
      type="number"
      label="合同造价"
      placeholder="请输入合同造价"
    >
      <span slot="button">元</span>
    </van-field>
    <van-cell
      title="开工日期"
      :value="formData.openDate"
      @click="
        showFlag1 = true;
        currentIndex = 1;
      "
      is-link
    />
    <van-cell
      title="竣工日期"
      :value="formData.endDate"
      @click="
        showFlag = true;
        currentIndex = 2;
      "
      is-link
    />
    <van-cell
      title="签约日期"
      :value="formData.contractDate"
      @click="
        showFlag = true;
        currentIndex = 3;
      "
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
      :title="calendarTitle"
      v-model="showFlag1"
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="new Date()"
      @confirm="onConfirm"
    />

    <van-calendar
      :title="calendarTitle"
      v-model="showFlag"
      :default-date="new Date()"
      :max-date="maxDate"
      @confirm="onConfirm"
    />
  </div>
</template>

<script src="./signContract.js"></script>

<style lang="stylus">
@import '~@/styles/signContract.styl';
</style>
