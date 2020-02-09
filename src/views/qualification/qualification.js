import Vue from 'vue'
import { Tab, Tabs, Divider, ImagePreview, Image } from 'vant'

Vue.use(Tab).use(Tabs).use(Divider).use(ImagePreview).use(Image)
export default {
  data () {
    return {
      active: 3,
      picList: []
    }
  },
  methods: {
    handleImagePreview (pic) {
      ImagePreview([
        pic
      ])
    },
    async getPageList () {
      const res = await this.$http.get('v1.home/getQualification')
      if (res.code === 1) {
        this.picList = res.data
      } else {
        this.picList = []
      }
    }
  },
  created () {
    this.getPageList()
  },
  mounted () {

  },
  components: {
    Tab,
    Tabs,
    Divider,
    Image
  },
  watch: {
    active (val) {
      switch (val) {
        case 0:
          this.$router.push({
            path: '/'
          })
          break
        case 1:
          this.$router.push({
            path: '/companyProfile'
          })
          break
        case 2:
          this.$router.push({
            path: '/businessScope'
          })
          break
        case 3:
          break
        case 4:
          this.$router.push({
            path: '/learnMore'
          })
          break
        default:
          this.$toast('敬请期待...')
          break
      }
    }
  }
}
