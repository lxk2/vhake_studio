import Vue from 'vue'
import {
  NoticeBar,
  Field,
  Cell,
  Popup,
  Picker,
  Calendar
} from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Popup).use(Picker).use(Calendar)
export default {
  data () {
    return {
      formData: {
        safetyTraining: '',
        warningEducation: '',
        trainingTime: '',
        specificTime: '',
        name: '',
        mobile: ''
      },
      specificTimeList: [{
        label: '上午',
        value: 1
      },
      {
        label: '下午',
        value: 2
      }
      ],
      loading: false,
      showFlag: false,
      showPopup: false
    }
  },
  methods: {
    onPickerConfirm (e) {
      this.formData.specificTime = e.label
      this.showPopup = false
    },
    onConfirm (e) {
      this.formData.trainingTime = this.fermitTime(e)
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
      const res = await this.$http.post('v1.home/onSiteTraining', this.formData)
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
        safetyTraining: '',
        warningEducation: '',
        trainingTime: '',
        specificTime: '',
        name: '',
        mobile: ''
      }
    }
  },
  created () {

  },
  mounted () {

  },
  components: {
    NoticeBar,
    Field,
    Cell,
    Popup,
    Calendar,
    Picker
  }
}
