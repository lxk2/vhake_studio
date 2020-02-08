import Vue from 'vue'
import { Tab, Tabs, Swipe, SwipeItem, Lazyload, Image, Popup, ActionSheet } from 'vant'

Vue.use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Lazyload, {
  lazyComponent: true
}).use(Image).use(Popup).use(ActionSheet)
export default {
  data () {
    return {
      active: 0,
      banners: [
        require('@/assets/new/mainbanner.png')
      ],
      gridImages: [
        require('@/assets/new/01.png'),
        require('@/assets/new/02.png'),
        require('@/assets/new/03.png'),
        require('@/assets/new/04.png')
      ],
      showFlag: false,
      showFlag2: false,
      actions: [
        {
          name: '预约进度款',
          subname: '',
          path: '/applyForProject'
        },
        {
          name: '预约票务',
          subname: '',
          path: '/bookTicket'
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      switch (index) {
        case 0:
          this.showFlag2 = true
          break
        case 1:
          this.$router.push({
            path: '/signContract'
          })
          break
        case 2:
          this.$router.push({
            path: '/taxAdvice'
          })
          break
        case 3:
          this.$router.push({
            path: '/otherService2'
          })
          break
        default:
          break
      }
    },
    onSelect (e) {
      this.$router.push({
        path: e.path
      })
    }
  },
  created () {

  },
  mounted () {
    const flag = sessionStorage.getItem('flag')
    if (!flag) {
      const timer = setTimeout(() => {
        this.showFlag = true
        sessionStorage.setItem('flag', 1)
        clearTimeout(timer)
        // const t = setTimeout(() => {
        //   this.showFlag = false
        //   clearTimeout(t)
        // }, 3000)
      }, 500)
    }
  },
  components: {
    Tab,
    Tabs,
    Swipe,
    SwipeItem,
    Image,
    Popup,
    ActionSheet
  },
  watch: {
    active (val) {
      switch (val) {
        case 0:
          break
        case 3: // 跳转到公司资质
          this.$router.push({
            path: '/qualification'
          })
          break
        default:
          this.$toast('敬请期待...')
          break
      }
    }
  }
}
