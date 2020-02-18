export default {
  data () {
    return {
      netData: {},
      id: 0
    }
  },
  methods: {
    async getPageDetail () {
      const result = await this.$http.post('v1.home/getNewsDetail', {
        id: this.id
      })
      if (result.code !== 1) {
        this.$dialog.alert({
          message: result.msg
        })
          .then(_ => {
            this.$router.go(-1)
          })
      } else {
        this.netData = result.data
      }
    }
  },
  created () {
    this.id = this.$route.query.id || 0
    this.getPageDetail()
  },
  mounted () {

  },
  components: {

  }
}
