import Vue from 'vue'
import { List, PullRefresh } from 'vant'

Vue.use(List).use(PullRefresh)
export default {
  data () {
    return {
      list: [],
      refreshFlag: false,
      page: 1,
      list_rows: 15,
      loading: false,
      finished: false
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
    PullRefresh
  },
  created () {
    this.getPageList()
  },
  mounted () {

  }
}
