<template>
  <div id="app">
    <div style="min-height: 400px;">
      <router-view></router-view>
    </div>
    <div class="g-font">
      <div class="m-font" style>下载书旗小说客户端</div>
      <div style="font-size:14px;margin:12px 16px;color:#333333;">海量图书，更高品质阅读体验</div>
      <p>@2016书旗网shuqi.com</p>
      <p>粤ICP备13078413号-1</p>
      <p>网络文化经营许可证：粤网文[2017]3018-499号</p>
      <p>增值电信业务经营许可证：粤B2-20130742</p>
      <p>广州阿里巴巴文学信息技术有限公司 版权所有</p>
      <p>广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
      <p>0571-26883636</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  watch: {
    selected(a, b) {
      console.log(a);
    }
  }
};
</script>

<style>
.g-font {
  min-height: 227px;
  background: #f0f0f3;
  padding: 24px 16px 22px;
  text-align: center;
}
.m-font {
  min-height: 40px;
  line-height: 40px;
  color: #ffffff;
  background: #00c98d;
  border-radius: 0.08rem;
}
.g-font p{
  font-size: 12px;
  color: #999999;
  line-height: 20px;
}
</style>