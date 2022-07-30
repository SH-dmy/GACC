<script setup>

</script>

<template>
  <div>
    <div class="header">
      <h1 style="font-size:20px; width:260px; height:34px; text-align:center;"> GACC统一账号平台</h1>
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
       <button type="button" class="login">开始使用</button>
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
        <div class="query">
          <div class="QA">
            Q: 什么是游戏统一账号？<br>
            A: 统一账号是一套账号映射服务，它将游戏业务中各渠道的OpenID统一映射为游戏GopenID，解决游戏出海， 数据合规的一系列问题。
          </div>
          <div class="QA">
            Q: 统一账号的格式是什么样的？<br>
            A: 统一账号类型根据业务可灵活配置，主要为：<br>
              • 字符型<br>
              • 无符号整型<br>
              具体可咨询统一帐号助手（GACC助手）
          </div>
          <div class="QA">
            Q: 有了统一账号后，业务的的接入流程有哪些变化？<br>
            A: 业务需要支持账号的长度。
          </div>
          <div class="QA"> 
            Q: 如何选择账号长度？<br>
            A: 请根据实际情况选择，如果不清楚，可与游戏服务器开发人员获取建议。我们建议使用64位无符号整型。
          </div>
          <div class="QA">
           Q: 什么是游戏统一账号？<br>
           A: 主要有以下变化：<br>
             • 接入统一账号后，游戏拿到的不再是渠道的OpenID，而是统一帐号的GOpenID；<br>
             • 游戏可以直接使用这个数据做用户数据在DB中的key；<br>
             • 与MSDK相关的接口，需要传递OpenID的参数，改成传递GOpenID或者参考MSDK的文档；<br>
             • IDIP请求传递给游戏业务的不再是OpenID，而是GOpenID，如果业务用它来做用户的key，可以直接定位到 用户，不再需要进一步转换；<br>
             • 业务受理也同时支持统一账号。
          </div>
          <div class="QA">
            Q: 统一账号有SDK吗？业务需要对接统一账号的SDK吗？<br>
            A: 统一账号是一个后台服务，理论上对业务透明，所有服务访问通过MSDK代理，业务只需要和MSDK交互，没有 SDK对接工作量。
          </div>
          <div class="QA">
            Q: 统一账号有SDK吗？业务需要对接统一账号的SDK吗？<br>
            A: 统一账号是一个后台服务，理论上对业务透明，所有服务访问通过MSDK代理，业务只需要和MSDK交互，没有 SDK对接工作量。
          </div>
          <div class="QA">
            Q: 业务接入统一帐号后，已有的基于OpenID的服务，以后的运营活动等该如何兼容？<br>
            A: 已有的服务，会有托管服务进行兼容，对调用方无感知，主要调用方式不会发生变化。具体场景可咨询GACC助手。
          </div>
        </div>
      </div>
    </div>
    <div class="footer">游戏统一账号 Copyright © 1998 - 2022 Tencent. All Rights Reserved. 腾讯公司 版权所有</div>
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
            <li id="peoduct_su<b">
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aqua;
 }
 
 h1 {
   font-size:20px;
   /* flex: 1; */
 }

 .user-box {
  /* width:260px; */
  height: 60px;
  /* flex: 1; */
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: greenyellow;
 }

button {
  width: 82px;
  height: 32px;
  /* flex: 1; */
  color: #447ed9;
  background-color: white;
  border: 1px solid #447ed9;
}
button:hover {
  background-color: blue;
  color: white;
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

.query {
  background-color: white;
}

.QA {
  height: 180px;
  margin: 1px ;
  letter-spacing: 1px;
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
