<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/test.vue'
</script>

<template>
  <div>
    <div class="header" style="background: #fff;">
      <div class="logo">
          <h1>GACC统一账号平台</h1>
      </div>
      <div class="user-box">
          <ul class="catagory">
            <li class="current">
              <a href="http://gacc.oa.com/">首页</a>
            </li>
            <li id="projectServiceID">
              <a href="http://odpclp.oa.com/" target="_blank">产品服务</a>
            </li>
            <li id="peoduct_sub">
              <a class="has-sub" href="javascript:;">帮助中心</a>
              <!-- <ul class="sub-nav">
                <li>
                  <a href="http://ce.oa.com/products/view/2340?&tab_id=all_issues_btn" target="_blank">用户反馈</a>
                </li>
                <li>
                  <a href="http://gacc.odptcp.oa.com/#/businesApply" target="_blank">权限申请</a>
                </li>
                <li>
                  <a href="https://iwiki.woa.com/space/gacc" target="_blank">文档中心</a>
                </li>
              </ul> -->
            </li>
          </ul>
          <div class="login">
            <!-- data-trace-id??? -->
            <a href="http://gacc.odpclp.oa.com" class="button_entry" target="_blank" data-trace-id="mp_h_free">开始使用</a>
          </div>
      </div>
    </div>
  </div>

  <!-- <div class="header" style="background: #fff;">
    <div class="wrapper">
      <div class="top-bar">
        <div class="logo">
          <h1>GACC统一账号平台</h1>
        </div>
        <div class="user-box">
          <ul>
            <li class="current">
              <a href="http://gacc.oa.com/">首页</a>
            </li>
            <li id="projectServiceID">
              <a href="http://odpclp.oa.com/" target="_blank">产品服务</a>
            </li>
            <li id="peoduct_sub">
              <a class="has-sub" href="javascript:;">帮助中心</a>
            </li>
          </ul>
          <div class="login">
            data-trace-id???
            <a href="http://gacc.odpclp.oa.com" class="button_entry" target="_blank" data-trace-id="mp_h_free">开始使用</a>
          </div>
        </div>
      </div>
    </div>   
  </div>
  
  <div id="div_banner" class="bdata_banner banner">
    <div style="width: 100%; height: 430px;background-color: #63C0E1;background-image: url(./public/banner-cus-export1.png);background-position: 50%;background-size: auto 100%;background-repeat: no-repeat; ">
    </div>
    <img src="./public/banner-cus-export1.png"/>
  </div> -->
</template>

<style scoped>
 div {
  font: 12px/1.5 tahoma, arial, PingFang SC, Microsoft Yahei, sans-serif;
 }
 .header {
  width: 1250px;
  height: 61.25px;
  display: flex;
  justify-content: space-around;
  text-align: center;
 }
 .logo {
  width: 260px;
  height: 34px;
 }
 .user-box {
  width: 800px;
  height: 60px;
  display: flex;
  justify-content: space-around;
 }
 .catagory {
 }
 /* .current {
  width: 52px;
  height: 60px;
 } */
 .login {
  width: 100px;
  height: 60px;
 }
 h1 {
  display: block;
  font-size: 2em;
  font-weight: 400;
  margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
 }
 li, ul {
    list-style: none;
}

/* .header {
  position: relative;
}
div {
  display: block;
} */

/* .header .wrapper {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    box-shadow: 0 0 10px rgb(0 0 0 / 5%);
} */
/* .wrapper {
    position: relative;
    margin: 0 auto;
    padding: 0;
    width: 1200px;
} */

/* .header .top-bar {
    z-index: 106;
    padding: 0 20px;
    min-width: 768px;
    background: #fff;
    text-align: center;
}
.header .logo h1 {
  width: 260px;
  height: 34px;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.header .user-box>ul .current>a {
    color: #447ed9;
}
.header .user-box>ul>li>a {
    display: block;
    padding: 18px 10px;
    color: #555;
    font-size: 16px;
}
/* 除去实心黑点 */
/* li, ul {
    list-style: none;
}

.header .user-box>ul>li {
    float: left;
    margin-right: 13px;
}
dd, h1, h2, h3, h4, h5, li, ol, p, ul {
    margin: 0;
    padding: 0;
}  */

</style>
