import Vue from 'vue'
import { NoticeBar, Field, Calendar, Cell, Popup, Picker } from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Calendar).use(Popup).use(Picker)

export default {
  data () {
    return {
      showPopup: false,
      loading: false,
      formData: {
        insuranceType: '',
        ofProject: '',
        remark: '',
        followUpName: '',
        name: '',
        mobile: ''
      },
      insuranceTypeList: [
        {
          label: '建筑工程保险',
          value: 1
        },
        {
          label: '工人意外保险',
          value: 2
        },
        {
          label: '两者都要',
          value: 3
        }
      ]
    }
  },
  methods: {
    onPickerConfirm (e) {
      this.formData.insuranceType = e.label
      this.showPopup = false
    },
    async submitForm () {
      if (this.loading) {
        this.$toast.loading({
          forbidClick: true
        })
        return false
      }
      this.loading = true
      const res = await this.$http.post('v1.home/insurancePurchasing', this.formData)
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
        insuranceType: '',
        ofProject: '',
        remark: '',
        followUpName: '',
        name: '',
        mobile: ''
      }
      this.loading = false
    }
  },
  components: {
    NoticeBar,
    Field,
    Calendar,
    Cell,
    Picker,
    Popup
  },
  created () {

  },
  mounted () {

  }
}
