import Vue from 'vue'
import { NoticeBar, Field } from 'vant'

Vue.use(NoticeBar).use(Field)
export default {
  data () {
    return {
      formData: {
        projectName: '',
        reservationPrice: '',
        applyPrice: '',
        name: '',
        mobile: ''
      },
      loading: false
    }
  },
  component: {
    NoticeBar,
    Field
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
      const res = await this.$http.post('v1.home/applyProject', this.formData)
      this.loading = false
      this.$dialog.alert({
        message: res.msg
      })
        .then(_ => {
          if (res.code === 1) {
            this.resetForm()
            this.$router.go(-1)
          }
        })
    },
    resetForm () {
      this.formData = {
        projectName: '',
        reservationPrice: '',
        applyPrice: '',
        name: '',
        mobile: ''
      }
    }
  },
  created () {

  },
  mounted () {
    this.loading = false
  }
}
