import Vue from 'vue'
import {
  NoticeBar,
  Field,
  Cell,
  Popup,
  Picker,
  Uploader,
  Button
} from 'vant'

Vue.use(NoticeBar).use(Field).use(Cell).use(Popup).use(Picker).use(Uploader).use(Button)
export default {
  data () {
    return {
      formData: {
        type: '',
        materialName: '',
        content: '',
        fileList: [],
        servings: '',
        followUpName: '',
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
      loading: false,
      fileList: []
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
      this.formData.fileList = []
      this.fileList.map(item => {
        if (item.serverUrl) {
          this.formData.fileList.push(item.serverUrl)
        }
      })
      const res = await this.$http.post('v1.home/otherService2', this.formData)
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
        type: '',
        materialName: '',
        content: '',
        servings: '',
        name: '',
        mobile: ''
      }
    },
    afterRead (_file) {
      _file.status = 'uploading'
      _file.message = '上传中...'
      const {file} = _file
      let param = new FormData()
      param.append('file', file)
      this.$http.post('v1.home/upload', param, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(result => {
          if (result.code === 1) {
            _file.status = 'done'
            _file.message = '上传成功'
            _file.serverUrl = result.data
          } else {
            _file.status = 'done'
            _file.message = '上传失败'
            this.$dialog.alert({
              message: result.msg
            })
          }
        })
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
    Picker,
    Uploader,
    Button
  }
}
