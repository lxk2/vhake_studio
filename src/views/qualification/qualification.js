import Vue from 'vue'
import { Tab, Tabs, Divider, ImagePreview, Image } from 'vant'

Vue.use(Tab).use(Tabs).use(Divider).use(ImagePreview).use(Image)
export default {
  data () {
    return {
      active: 3
    }
  },
  methods: {
    handleImagePreview () {
      ImagePreview([
        require('@/assets/icon/zizhi.png')
      ])
    }
  },
  created () {

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
        case 3:
          break
        default:
          this.$toast('敬请期待...')
          break
      }
    }
  }
}
