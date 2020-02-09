import Vue from 'vue'
import { NoticeBar, Tab, Tabs } from 'vant'

Vue.use(NoticeBar).use(Tab).use(Tabs)
export default {
  data () {
    return {
      netData: {},
      active: 4
    }
  },
  methods: {
    async getPageData () {
      const res = await this.$http.post('v1.home/richText', {
        id: 5
      })
      if (res.code === 1) {
        this.netData = res.data
      } else {
        this.$dialog.alert({
          message: res.msg
        })
          .then(_ => {
            this.$router.go(-1)
          })
      }
    }
  },
  created () {
    this.getPageData()
  },
  mounted () {

  },
  components: {
    NoticeBar,
    Tab,
    Tabs
  },
  watch: {
    active (val) {
      switch (val) {
        case 0:
          this.$router.push({
            path: '/'
          })
          break
        case 1:
          this.$router.push({
            path: '/companyProfile'
          })
          break
        case 2:
          this.$router.push({
            path: '/businessScope'
          })
          break
        case 3:
          this.$router.push({
            path: '/qualification'
          })
          break
        case 4:
          break
        default:
          this.$toast('敬请期待...')
          break
      }
    }
  }
}