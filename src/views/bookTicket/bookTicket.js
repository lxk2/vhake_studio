import Vue from 'vue'
import { NoticeBar, Field, Calendar, Cell, Popup, Picker } from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Calendar).use(Popup).use(Picker)
export default {
  data () {
    return {
      showPopup: false,
      showPopup2: false,
      showFlag: false,
      formData: {
        projectName: '',
        price: '',
        taxRate: '',
        ticketType: '',
        backTime: '',
        followUpName: '',
        name: '',
        mobile: ''
      },
      taxRateList: [
        {
          label: '3%',
          value: '0.03'
        },
        {
          label: '9%',
          value: '0.09'
        }
      ],
      ticketTypeList: [
        {
          label: '劳务清包工',
          value: 1
        },
        {
          label: '工程款',
          value: 2
        }
      ],
      loading: false,
      maxDate: '',
      minDate: ''
    }
  },
  methods: {
    onConfirm (e) {
      this.formData.backTime = this.fermitTime(e)
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
      const res = await this.$http.post('v1.home/bookTicket', this.formData)
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
    onPickerConfirm (e, type) {
      switch (type) {
        case 1:
          this.formData.taxRate = e.value
          break
        case 2:
          this.formData.ticketType = e.label
          break
        default:
          break
      }
      this.showPopup = this.showPopup2 = false
    },
    resetForm () {
      this.formData = {
        projectName: '',
        price: '',
        taxRate: '',
        ticketType: '',
        backTime: '',
        followUpName: '',
        name: '',
        mobile: ''
      }
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
  },
  components: {
    NoticeBar,
    Field,
    Calendar,
    Cell,
    Picker,
    Popup
  }
}
