<template>
  <div>
    <mt-header fixed title="首页"></mt-header>
    <div style="padding:44px;">
      <div class="g-nav">
        <a href="#/no1">分类</a>
        <a href="#/no2">排行</a>
        <a href="#/no3">女频</a>
        <a href="#/no4">男频</a>
        <a href="#/no5">书单</a>
      </div>
    </div>
    <div style="height:114px;">
      <img src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg" alt />
    </div>
    <div class="g-jin">
      <h2>女生美文</h2>
      <div class="m-jin">
        <div class="m-jin-1">
          <img src="http://img-tailor.11222.cn/bcv/big/1190627866784.jpg" alt />
          <p>重生九零：鲜妻甜似火</p>
          <span>君如陌</span>
        </div>
        <div class="m-jin-1">
          <img src="http://img-tailor.11222.cn/bcv/big/1129407935025.jpg" alt />
          <p>重生九零：鲜妻甜似火</p>
          <span>君如陌</span>
        </div>
        <div class="m-jin-1">
          <img src="http://img-tailor.11222.cn/bcv/big/201611081423109675.jpg" alt />
          <p>重生九零：鲜妻甜似火</p>
          <span>君如陌</span>
        </div>
        <div class="m-jin-1">
          <img src="http://img-tailor.11222.cn/bcv/big/1160197370783.jpg" alt />
          <p>重生九零：鲜妻甜似火</p>
          <span>君如陌</span>
        </div>
      </div>
      <div class="g-com">
        <div class="m-com">
          <div class="m-com-1">
            <p>农家俏闺女</p>
            <div>
              <span>完结</span>
              <span>古典架空</span>
            </div>
          </div>
          <div class="m-com-2">
            <p>尹好月本是现代公务员一枚，不甚穿越到了史上毫无记载架空的年代。</p>
          </div>
        </div>
        <div class="m-com">
          <div class="m-com-1">
            <p>农家俏闺女</p>
            <div>
              <span>完结</span>
              <span>古典架空</span>
            </div>
          </div>
          <div class="m-com-2">
            <p>尹好月本是现代公务员一枚，不甚穿越到了史上毫无记载架空的年代。</p>
          </div>
        </div>
        <div class="m-com">
          <div class="m-com-1">
            <p>农家俏闺女</p>
            <div>
              <span>完结</span>
              <span>古典架空</span>
            </div>
          </div>
          <div class="m-com-2">
            <p>尹好月本是现代公务员一枚，不甚穿越到了史上毫无记载架空的年代。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  }
  // created(){
  //   this.$http
  //   .get(
  //     'http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582451346&type=2&resetcache=&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=07780C405334328DD3542460E974C890&key=shuqiapi&_=1582451346076',{
  //     params:{
  //       appId: 1,
  //         pageId: 1,
  //         channelId: '',
  //         versionId: '',
  //         ver: '',
  //         shuqi_h5: '',
  //         md5key: '',
  //         userId: 8000000,
  //         timestamp: 1582451346,
  //         type: 2,
  //         resetcache: '',
  //         func_id: '12,33,11,28,33,12,33,11,19',
  //         orderid: '31,32,33,34,35,36,37,38,39',
  //         sign: '07780C405334328DD3542460E974C890',
  //         key: 'shuqiapi',
  //         _: 1582451346076,
  //   }}).then((data)=>{
  //     console.log(data,data,data)
  //   })
  // }
};
</script>

<style>
.mint-header {
  height: 44px;
  background: #ffffff;
  color: #333;
}
.g-nav {
  height: 68px;
  padding: 15px 20px 12px;
  display: flex;
  text-align: center;
  line-height: 68px;
}
.g-nav a {
  flex: 1;
  color: #999;
}
.g-jin h2 {
  padding: 16px 0 0 16px;
  font-size: 14px;
  color: #333;
}
.m-jin {
  height: 259px;
  padding: 16px 0 16px 16px;
  border-top: 1px solid #f3f3f3;
}
.m-jin-1{
  height: 259px;
  width: 162px;
  padding-right: 16px;
  float: left;
  font-size: 12px;
}
.m-jin-1 img{
  width: 162px;
  height: 216px;
  border: .01rem solid rgba(0,0,0,.1);
}
.m-jin-1 p{
  color: #333;
  margin: 8px 0 2px;
}
.m-jin-1 span{
  color: #999;
}
.g-com{
  padding-left: 16px;
}
.m-com{
  height: 77px;
  padding: 16px 16px 16px 0;
}
.m-com-1{
  height: 20px;
  line-height: 20px;
}
.m-com-1 p{
  font-size: 15px;
  color: #333;
  float: left;
}
.m-com-1 div span{
  font-size: 10px;
  color: #999;
  padding:0 5.5px;
  margin-right: 4px;
  border: 1px solid rgba(153,153,153,.3);
  text-align: center;
  float: right;
}
.m-com-2{
  margin-top: 15px;
  height: 20px;
  color: #999;
  overflow: hidden;
  font-size: 12px;
}
.m-com-2 p{
  overflow: hidden;
}
</style>