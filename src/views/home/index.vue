<template>
  <div>
    <div class="header-card">
      <div class="person-ifo">
        <div class="org">
          <img src="https://ygqa.ccb.com/ecpweb/page/internet/crm/dist/static/img/ic_jianhang_logo@2x.png" alt="" class="logo-right">
          <div class="ccb-org">广州新港路支行</div>
        </div>
        <div class="mrch-nm">
          唐宇杰的工作室
        </div>
      </div>
      <div class="card">
        <div class="header-img-box">
          <div>
            <img class="img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1853262708,1165167468&fm=26&gp=0.jpg" alt="">
          </div>
          <div class="flex tip-under-header">
            <span class="EMPE_NM">唐宇杰</span>
            <span class="EMPE_NM position">客户经理</span>
          </div>
        </div>
        <div class="header-zizhi">
          <div class="zige-cer">资格认证证书</div>
          <div class="zizhi-cer">
            <div>
              <img src="https://ygqa.ccb.com/ecpweb/page/internet/crm/dist/static/img/littleshow.png" class="img" alt="">
            </div>
          </div>
          <div class="dsc"></div>
          <!-- <div class="more">
            <div>
              查看更多 >>
            </div>
          </div> -->
        </div>
        <img src="@/assets/icon/01.png" alt="" class="card-phone">
      </div>
    </div>
    <van-notice-bar
      color="#5c0e00"
      class="myNoticeBar"
      left-icon="volume-o"
    >
      通知内容
    </van-notice-bar>
    <div class="label-title">
      <div class="child_div">
        <img src="@/assets/icon/02.png" alt="" class="img">
        <label class="line_title">公司简介</label>
        <img src="@/assets/icon/03.png" alt="" class="img">
      </div>
    </div>

    <div class="grid">
      <div class="item">
        <div class="backimg" :style="`background-image: url(${backgroundImage[0]})`">
          <div class="font-top">微信公众号</div>
          <div class="font-bot">xxxxxxxxxxxxxxx</div>
        </div>
      </div>
      <div class="item">
        <div class="backimg" :style="`background-image: url(${backgroundImage[1]})`">
          <div class="font-top">公司网站</div>
          <div class="font-bot">desc</div>
        </div>
      </div>
    </div>

    <div class="label-title">
      <div class="child_div">
        <img src="@/assets/icon/02.png" alt="" class="img">
        <label class="line_title">邀您体验</label>
        <img src="@/assets/icon/03.png" alt="" class="img">
      </div>
    </div>
    <div class="grid">
      <div class="item">
        <div class="backimg" :style="`background-image: url(${backgroundImage[0]})`">
          <div class="font-top">申请工程款</div>
          <div class="font-bot">desc</div>
        </div>
      </div>
      <div class="item">
        <div class="backimg" :style="`background-image: url(${backgroundImage[1]})`">
          <div class="font-top">签约合同</div>
          <div class="font-bot">desc</div>
        </div>
      </div>
      <div class="item">
        <div class="backimg" :style="`background-image: url(${backgroundImage[0]})`">
          <div class="font-top">预约票务服务</div>
          <div class="font-bot">desc</div>
        </div>
      </div>
      <div class="item">
        <div class="backimg" :style="`background-image: url(${backgroundImage[1]})`">
          <div class="font-top">其他服务</div>
          <div class="font-bot">desc</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style lang="stylus" scoped>
  @import '~@/styles/common.styl';
  @import '~@/styles/home.styl';
</style>
