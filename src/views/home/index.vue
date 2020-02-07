<template>
  <div>
    <div class="header-card">
      <div class="person-ifo">
        <!-- <div class="org">
          <img src="https://ygqa.ccb.com/ecpweb/page/internet/crm/dist/static/img/ic_jianhang_logo@2x.png" alt="" class="logo-right">
          <div class="ccb-org">广州新港路支行</div>
        </div>
        <div class="mrch-nm">
          唐宇杰的工作室
        </div> -->
      </div>
      <div class="card">
        <div class="header-img-box">
          <div>
            <img class="img" src="@/assets/icon/logo.png" alt="">
          </div>
          <!-- <div class="flex tip-under-header">
            <span class="EMPE_NM">唐宇杰</span>
            <span class="EMPE_NM position">客户经理</span>
          </div> -->
        </div>
        <div class="header-zizhi">
          <div class="zige-cer" style="font-weight: bold">运营总监</div>
          <div class="tel-a" style="font-weight: bold">
            <span>黄脞东</span>
            <a tel="15018489060" class="tel">15018489060</a>
          </div>
          <div class="zige-cer" style="font-weight: bold">客服经理</div>
          <div class="tel-a" style="font-weight: bold">
            <span>温少梅</span>
            <a tel="18023473403" class="tel">18023473403</a>
          </div>
          <div class="zige-cer" style="font-weight: bold">客服值班经理电话</div>
          <div class="tel-a" style="font-weight: bold">
            <a style="margin-left: 0" tel="1802812242" class="tel">1802812242</a>
          </div>
          <div class="zige-cer" style="font-weight: bold">值班固话</div>
          <div class="tel-a" style="font-weight: bold">
            <a style="margin-left: 0" tel="020-31951304" class="tel">020-31951304</a>
          </div>

          <!-- <div class="zizhi-cer">
            <div>
              <img src="https://ygqa.ccb.com/ecpweb/page/internet/crm/dist/static/img/littleshow.png" class="img" alt="">
            </div>
          </div>
          <div class="dsc"></div> -->
          <!-- <div class="more">
            <div>
              查看更多 >>
            </div>
          </div> -->
        </div>
        <!-- <img src="@/assets/icon/01.png" alt="" class="card-phone"> -->
      </div>
    </div>
    <van-notice-bar
      color="#5c0e00"
      class="myNoticeBar"
      left-icon="volume-o"
      :text="notice"
      :scrollable="true"
    ></van-notice-bar>
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
          <div class="font-bot">广州晋拓建筑工程有限公司</div>
        </div>
      </div>
      <div class="item" @click="toJt">
        <div class="backimg" :style="`background-image: url(${backgroundImage[1]})`">
          <div class="font-top">公司网站</div>
          <div class="font-bot">www.jtlw.com.cn</div>
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
      <div class="item" @click="showFlag = true">
        <div class="backimg" :style="`background-image: url(${backgroundImage[0]})`">
          <div class="font-top">申请工程款</div>
          <div class="font-bot">Apply for a project</div>
        </div>
      </div>
      <div class="item" @click="() => {
          $router.push({
            path: '/signContract'
          })
        }">
        <div class="backimg" :style="`background-image: url(${backgroundImage[1]})`">
          <div class="font-top">签约合同</div>
          <div class="font-bot">Sign a contract</div>
        </div>
      </div>
      <div class="item" @click="() => {
          $router.push({
            path: '/otherService'
          })
        }">
        <div class="backimg" :style="`background-image: url(${backgroundImage[0]})`">
          <div class="font-top">其他服务</div>
          <div class="font-bot">Other service</div>
        </div>
      </div>
      <div class="item" @click="() => {
          $router.push({
            path: '/feedback'
          })
        }">
        <div class="backimg" :style="`background-image: url(${backgroundImage[1]})`">
          <div class="font-top">投诉与反馈</div>
          <div class="font-bot">Complaints and feedback</div>
        </div>
      </div>
    </div>
    <van-action-sheet v-model="showFlag" :actions="actions" @select="onSelect" :close-on-click-action="true" cancel-text="关闭" />
  </div>
</template>

<script src="./home.js"></script>

<style lang="stylus" scoped>
  @import '~@/styles/common.styl';
  @import '~@/styles/home.styl';
</style>
