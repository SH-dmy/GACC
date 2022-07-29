<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/test.vue'
</script>

<template>
  <div>
    <div class="header">
      <h1 style="font-size:20px; width:260px; height:34px;"> GACC统一账号平台</h1>
      <ul class="user-box">
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
       <a-button class="login" style="width:82px; height:32px;">开始使用</a-button>
    </div>
    <div class="banner">
      <img src="../public/banner-cus-export1.png" alt="">
    </div>
    <div class="main-container">
      <ul class="targets">
      <li class="taget1">
        <img src="../public/target.png" alt="" style="width:72px; height:72px;">
        <h3>目标一</h3>
        <p>统一并拓展游戏大盘帐号信息流的服务渠道<br>
           并通过建立以统一账户为核心的用户信息数据湖<br>
           实现关键数据的统一归集<br>
           丰富游戏帐号数据维度
        </p>
      </li>
      <li class="taget2">
        <img src="../public/target.png" alt="" style="width:72px; height:72px;">
        <h3>目标一</h3>
        <p>统一并拓展游戏大盘帐号信息流的服务渠道<br>
           并通过建立以统一账户为核心的用户信息数据湖<br>
           实现关键数据的统一归集<br>
           丰富游戏帐号数据维度
        </p>
      </li>
      <li class="taget3">
        <img src="../public/target.png" alt="" style="width:72px; height:72px;">
        <h3>目标一</h3>
        <p>统一并拓展游戏大盘帐号信息流的服务渠道<br>
           并通过建立以统一账户为核心的用户信息数据湖<br>
           实现关键数据的统一归集<br>
           丰富游戏帐号数据维度
        </p>
      </li>
    </ul>
    </div>
    <div class="bottom-container">
      <div class="wrapper">
        <h2 class="index-tit">服务功能</h2>
        <ul class="functions">
          <li>
            <div class="item">
              <h4>账号映射服务</h4>
              <span style="font-size:12px;">解决游戏出海合规</span>
              <!-- 待实现：鼠标悬停时出现 且有背景色
              <p>账号映射服务<br>
                解决游戏出海合规
              </p> -->
            </div>
          </li>
          <li>
            <div class="item">
              <h4>账号映射服务</h4>
              <span style="font-size:12px;">解决游戏出海合规</span>
              <!-- 待实现：鼠标悬停时出现 且有背景色
              <p>账号映射服务<br>
                解决游戏出海合规
              </p> -->
            </div>
          </li>
          <li>
            <div class="item">
              <h4>账号映射服务</h4>
              <span style="font-size:12px;">解决游戏出海合规</span>
              <!-- 待实现：鼠标悬停时出现 且有背景色
              <p>账号映射服务<br>
                解决游戏出海合规
              </p> -->
            </div>
          </li>
        </ul>
        <h2 class="index-tit">FAQ</h2>
        
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

 .header {
  width: auto;
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
 }
 
 .user-box {
  width:260px;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: greenyellow;
 }

p {
  background-color: antiquewhite;
  font-size: 16px;
}

/* h1 {
  font-weight: 400px;
} */

li {
    font-size: 12px;
    list-style: none;
    margin-left: 20px;
}

a:link {
  color: #333;
}
a:hover {
  color: #447ed9;
}

.banner {
  width: 100%;
  height: 430px;
  background-color: #63c0e1;
  background-position: 50%;
  background-size: auto 100%;
  background-repeat: no-repeat;
}

.main-container {
   width: 100%;
   height: 436px;
   display: flex;
   align-items: center;
   background-color: antiquewhite;
}
.targets {
  width: 100%;
  height: 326px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
}

.targets>li {
  /* 未生效 */
  width: 326px; 
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-content: center; */
  background-color: red;
}

p {
  font-size: 12px;
}

.bottom-container {
  height: 2000px;
  /* display: flex;
  align-items: center; */
  background-color:  #eef4f9;
}

.index-tit {
    margin-bottom: 40px;
    color: #4b76b9;
    font-size: 22px;
    text-align: center;
}

.item{
  background-image: url('../public/data_info_bg.png');
  /* background-position: 100% 100%; */
  /* background-size: 25%; */
  /* background-repeat: no-repeat; */
}

.functions {
  background-color: red;
 width: auto;
 height: 548px;
 display: flex;
 justify-content: center;
}

.functions>li {
  background-color:beige;
  
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
