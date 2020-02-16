import Vue from 'vue'
import { NoticeBar, Field, Cell, Calendar } from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Calendar)
export default {
  data () {
    return {
      formData: {
        projectName: '',
        reservationPrice: '',
        applyPrice: '',
        arrivalTime: '',
        remark: '',
        followUpName: '',
        name: '',
        mobile: ''
      },
      loading: false,
      showFlag: false,
      minDate: '',
      maxDate: ''
    }
  },
  component: {
    NoticeBar,
    Field,
    Calendar,
    Cell
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
            // this.$router.go(-1)
          }
        })
    },
    resetForm () {
      this.formData = {
        projectName: '',
        reservationPrice: '',
        applyPrice: '',
        arrivalTime: '',
        followUpName: '',
        name: '',
        mobile: ''
      }
    },
    onConfirm (e) {
      this.formData.arrivalTime = this.fermitTime(e)
      this.showFlag = false
    },
    fermitTime (time) {
      let now = new Date(time)
      let year = now.getFullYear()
      let mon = now.getMonth() + 1
      let date = now.getDate()
      if (mon < 10) {
        mon = '0' + mon
      }
      if (date < 10) {
        date = '0' + date
      }
      let postDate = year + '-' + mon + '-' + date
      return postDate
    },
    getDate () {
      var nowdays = new Date()
      var year = nowdays.getFullYear()
      var month = nowdays.getMonth()
      if (month === 0) {
        month = 12
        year = year - 1
      }
      if (month < 10) {
        month = '0' + month
      }
      console.log(year, month - 1, 1)
      this.minDate = new Date(year - 10, month - 1, 1)
      this.maxDate = new Date(year + 10, 11, 31)
    }
  },
  created () {
    this.getDate()
  },
  mounted () {
    this.loading = false
  }
}
