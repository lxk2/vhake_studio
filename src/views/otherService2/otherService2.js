import Vue from 'vue'
import {
  NoticeBar,
  Field,
  Cell,
  Popup,
  Picker
} from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Popup).use(Picker)
export default {
  data () {
    return {
      formData: {
        type: '',
        materialName: '',
        content: '',
        servings: '',
        name: '',
        mobile: ''
      },
      typeList: [{
        label: '情况资料',
        value: 1
      },
      {
        label: '工资单',
        value: 2
      },
      {
        label: '公司资质',
        value: 3
      },
      {
        label: '其他资料',
        value: 4
      }
      ],
      showPopup: false,
      loading: false
    }
  },
  methods: {
    onPickerConfirm (e) {
      const {
        label
      } = e
      this.formData.type = label
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
      const res = await this.$http.post('v1.home/otherService2', this.formData)
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
        type: '',
        materialName: '',
        content: '',
        servings: '',
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
    Picker
  }
}
