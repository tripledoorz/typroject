<template>
    <div class="contain" >
        <swiper class="swiper_box" :options="swiperOption">
            <swiper-slide v-for="items in baseList" :key="items" >
                <img :src="items.img" class="poster_img" @click="app_tp" >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="poster_bg" v-bind:style="{backgroundImage:'url(' + img_bg + ')'}"></div>
    </div>
</template>

<script>
const baseList = [
  {
    img: 'static/poster_1.png',
    img_bg: 'static/posters_1.png',
    options: {
      contentId: 'C41203624', // 扫毒:C39827744, 复仇者联盟2:C40635161, 厉害了，我的国:
      clickType: 0,
      clickParam: '6'
    }
  },
  {
    img: 'static/poster_2.png',
    img_bg: 'static/posters_2.png',
    options: {
      contentId: 'C39827744',
      clickType: 0,
      clickParam: '6'
    }
  },
  {
    img: 'static/poster_3.png',
    img_bg: 'static/posters_3.png',
    options: {
      contentId: 'C40635161',
      clickType: 0,
      clickParam: '6'
    }
  }
]
export default {
  data () {
    const self = this
    return {
      swiperOption: {
        slidesPerView: 1.3,
        centeredSlides: false,
        spaceBetween: 10,
        initialSlide: 0,
        loopAdditionalSlides: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChangeTransitionEnd: function () {
            self.s_index = this.realIndex
            self.img_bg = self.baseList[this.realIndex].img_bg
          }
        }
      },
      img_bg: 'static/posters_1.png',
      baseList: baseList,
      s_index: 0
    }
  },
  methods: {
    app_tp: function () {
      TysxJsSdk.invokeJsApi(
        'open_video_detail',
        baseList[this.s_index].options
      )
    }
  }
}
</script>

<style scoped lang='less'>
.contain {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .swiper_box {
    margin-top: 1rem;
    height: 14.4rem;
    .swiper-slide {
      left: 4%;
    }
  }
  .poster_img {
    z-index: 22;
    // margin: 0 auto;
    width: 8.1rem;
  }
  .poster_bg {
    position: absolute;
    top: 0;
    z-index: 0;
    height: 16.08rem;
    width: 100%;
    background-size: contain;
  }
  .swiper-pagination {
  }
}
</style>
