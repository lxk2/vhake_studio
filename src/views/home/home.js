import Vue from 'vue'
import { NoticeBar } from 'vant'

Vue.use(NoticeBar)
export default {
  data () {
    return {
      backgroundImage: [
        require('@/assets/icon/04.png'),
        require('@/assets/icon/05.png')
      ]
    }
  },
  components: {
    NoticeBar
  }
}
