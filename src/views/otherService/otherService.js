import Vue from 'vue'
import { NoticeBar } from 'vant'

Vue.use(NoticeBar)
export default {
  data () {
    return {
      netData: {}
    }
  },
  methods: {
    async getPageData () {
      const res = await this.$http.get('v1.home/otherService')
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
    NoticeBar
  }
}
