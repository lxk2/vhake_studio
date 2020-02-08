<template>
  <div>
    <!-- <van-notice-bar wrapable :scrollable="false" mode="closeable">
      资料审批盖章或其他有关项目，输入相关信息提交即可
      <br />
      如有任何操作问题可随时联系拨打客服电话或联系您的业务经办人，期待您的体验及建议，晋拓将一如既往地提供优质高效专业的服务！
    </van-notice-bar> -->
    <div class="container" v-html="netData.content"></div>
  </div>
</template>

<script src="./otherService.js"></script>

<style lang="stylus">
@import '~@/styles/otherService.styl';
</style>
