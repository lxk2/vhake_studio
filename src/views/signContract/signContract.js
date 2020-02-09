import Vue from 'vue'
import { NoticeBar, Field, Calendar, Cell } from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Calendar)
export default {
  data () {
    return {
      formData: {
        projectName: '',
        projectInfo: '',
        contractPrice: '',
        openDate: '',
        endDate: '',
        contractDate: '',
        followUpName: '',
        name: '',
        mobile: ''
      },
      showFlag: false,
      calendarTitle: '',
      currentIndex: 0,
      loading: false
    }
  },
  methods: {
    onConfirm (e) {
      let date = this.fermitTime(e)
      switch (this.currentIndex) {
        case 1:
          this.formData.openDate = date
          break
        case 2:
          this.formData.endDate = date
          break
        case 3:
          this.formData.contractDate = date
          break
        default:
          break
      }
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
    async submitForm () {
      if (this.loading) {
        this.$toast.loading({
          forbidClick: true
        })
        return false
      }
      this.loading = true
      const res = await this.$http.post('v1.home/signContract', this.formData)
      this.loading = false
      this.$dialog.alert({
        message: res.msg
      })
        .then(_ => {
          if (res.code === 1) {
            this.resetFormData()
            // this.$router.go(-1)
          }
        })
    },
    resetFormData () {
      this.formData = {
        projectName: '',
        projectInfo: '',
        contractPrice: '',
        openDate: '',
        endDate: '',
        contractDate: '',
        followUpName: '',
        name: '',
        mobile: ''
      }
    }
  },
  created () {

  },
  mounted () {
    this.loading = false
  },
  component: {
    NoticeBar,
    Field,
    Cell,
    Calendar
  },
  watch: {
    currentIndex (val, oldVal) {
      switch (val) {
        case 1:
          this.calendarTitle = '选择开工日期'
          break
        case 2:
          this.calendarTitle = '选择竣工日期'
          break
        case 3:
          this.calendarTitle = '选择签约日期'
          break
        default:
          this.calendarTitle = ''
          break
      }
    }
  }
}
