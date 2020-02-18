import Vue from 'vue'
import { List, PullRefresh, Tab, Tabs } from 'vant'

Vue.use(List).use(PullRefresh).use(Tab).use(Tabs)
export default {
  data () {
    return {
      list: [],
      refreshFlag: false,
      page: 1,
      list_rows: 15,
      loading: false,
      finished: false,
      active: 1
    }
  },
  methods: {
    onRefresh () {
      this.page = 1
      this.list = []
      this.loading = false
      this.finished = false
      this.getPageList()
    },
    async getPageList () {
      if (this.loading) {
        return false
      }
      this.loading = true
      const result = await this.$http.post('v1.home/getNewsList', {
        page: this.page,
        list_rows: this.list_rows
      })
      this.refreshFlag = false
      this.loading = false
      if (result.code === 1) {
        if (this.page === 1) {
          this.list = result.data.list
        } else {
          this.list = this.list.concat(result.data.list)
        }
        this.finished = result.data.finished
      }
    },
    onLoad () {
      this.page++
      this.getPageList()
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
  components: {
    List,
    PullRefresh,
    Tab,
    Tabs
  },
  created () {
    this.getPageList()
  },
  mounted () {

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
