<template>
  <div>
    <van-notice-bar wrapable :scrollable="false" mode="closeable">
      请根据下方表格录入资料类型、资料内容、盖章份数、联系方式信息，提交即可
      <br />
      提交资料，请添加客服QQ：2971480585
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar>
    <van-cell
      title="资料类型"
      :value="formData.type"
      @click="showPopup = true"
      is-link
    />
    <van-field
      label-width="90"
      v-if="formData.type === '其他资料'"
      v-model="formData.materialName"
      label="资料名称"
      placeholder="请输入资料名称"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.content"
      type="textarea"
      :autosize="{
        minHeight: 100
      }"
      label="资料内容"
      placeholder="请输入资料内容"
    ></van-field>
    <van-field
      label-width="90"
      v-model="formData.servings"
      type="digit"
      label="盖章份数"
      placeholder="请输入盖章份数"
    ></van-field>
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
        title="选择资料类型"
        :columns="typeList"
        @confirm="onPickerConfirm"
        :show-toolbar="true"
      />
    </van-popup>
  </div>
</template>

<script src="./onSiteTraining.js"></script>

<style lang="stylus">
@import '~@/styles/onSiteTraining.styl';
</style>
