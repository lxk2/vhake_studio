import Vue from 'vue'
import { NoticeBar, ActionSheet, Image, ImagePreview } from 'vant'

Vue.use(NoticeBar).use(ActionSheet).use(Image).use(ImagePreview)
export default {
  data () {
    return {
      backgroundImage: [
        require('@/assets/icon/04.png'),
        require('@/assets/icon/05.png')
      ],
      showFlag: false,
      actions: [
        {
          name: '预约进度款',
          subname: '',
          path: '/applyForProject'
        },
        {
          name: '预约票务',
          subname: '',
          path: '/bookTicket'
        }
      ],
      notice: ''
    }
  },
  components: {
    NoticeBar,
    ActionSheet,
    Image
  },
  methods: {
    onSelect (e) {
      this.$router.push({
        path: e.path
      })
    },
    async initPage () {
      const res = await this.$http.post('v1.home/home')
      if (res.code === 1) {
        const {
          notice = ''
        } = res.data
        this.notice = notice
      }
    },
    toJt () {
      window.location.href = 'http://www.jtlw.com.cn'
    },
    handleImagePreview () {
      ImagePreview([
        'https://images.http.org.cn/zizhi.png'
      ])
    }
  },
  created () {
    this.initPage()
  }
}
