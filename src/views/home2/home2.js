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
      ],
      newsList: []
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
    },
    async getNewsList () {
      const res = await this.$http.post('v1.home/getNewsList', {
        page: 1,
        list_rows: 5
      })
      if (res.code === 1) {
        this.newsList = res.data.list
      } else {
        this.newsList = []
      }
    },
    toMore () {
      this.$router.push({
        path: '/news'
      })
    },
    toDetail (id) {
      this.$router.push({
        path: '/newsDetail',
        query: {
          id
        }
      })
    }
  },
  created () {
    this.getNewsList()
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
        case 1:
          this.$router.push({
            path: '/news'
          })
          break
        case 2:
          this.$router.push({
            path: '/companyProfile'
          })
          break
        case 3:
          this.$router.push({
            path: '/businessScope'
          })
          break
        case 4: // 跳转到公司资质
          this.$router.push({
            path: '/qualification'
          })
          break
        case 5:
          this.$router.push({
            path: '/learnMore'
          })
          break
        default:
          this.$toast('敬请期待...')
          break
      }
    }
  }
}
