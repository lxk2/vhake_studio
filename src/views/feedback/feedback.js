import Vue from 'vue'
import { NoticeBar, Field } from 'vant'

Vue.use(NoticeBar).use(Field)
export default {
  data () {
    return {
      formData: {
        name: '',
        email: '',
        mobile: '',
        content: ''
      },
      loading: false
    }
  },
  methods: {
    async submitForm () {
      if (this.loading) {
        this.$toast.loading({
          forbidClick: true
        })
        return false
      }
      this.loading = true
      const res = await this.$http.post('v1.home/feedback', this.formData)
      this.loading = false
      this.$dialog.alert({
        message: res.msg
      })
        .then(_ => {
          if (res.code === 1) {
            this.resetForm()
            // this.$router.go(-1)
          }
        })
    },
    resetForm () {
      this.formData = {
        name: '',
        email: '',
        mobile: '',
        content: ''
      }
    }
  },
  created () {

  },
  mounted () {
    this.loading = false
  },
  components: {
    NoticeBar,
    Field
  }
}
