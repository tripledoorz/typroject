<template>
  <div>
    <divider class="bx_ti">
        <flexbox orient="vertical" :gutter="10">
            <flexbox-item class="bx_xt">请选择用</flexbox-item>
            <flexbox-item class="bx_xt">小程序或App打开页面</flexbox-item>
        </flexbox>
    </divider>
    <div class="bx_bt">
        <flexbox orient="vertical" :gutter="16">
        <flexbox-item><div class="flex-demo" @click="change(1)"><x-button type="primary">打开小程序</x-button></div></flexbox-item>
        <flexbox-item><div class="flex-demo" @click="change(2)"><x-button type="primary" >打开天翼视讯App</x-button></div></flexbox-item>
        </flexbox>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div class="img-box">
          <img src="static/qrcode.png" style="max-width:100%">
          <p>打开小程序，长按二维码</p>
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem, Divider, XDialog } from 'vux'

export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    Divider,
    XDialog
  },
  methods: {
    change (value) {
      if (value === 1) {
        this.showToast = true
      } else if (value === 2) {
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.telecom.video&android_schema=newtysx%3a%2f%2f'
      }
    }
  },
  data () {
    return {
      showToast: false
    }
  },
  beforeMount: {

  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close';
.bx_ti{
    font-size: 0.4533rem;
    font-weight: 800;
    margin-top: 0.4533rem;
    .bx_xt{
        text-align: center;
    }
}
.bx_bt{
    margin:  1.6667rem 0.4133rem
}
.img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>
