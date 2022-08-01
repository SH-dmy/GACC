<script setup>
import {reactive} from "vue";

const state = reactive({
  isShow: false,
  isTextShow: false,
});

const toTop = () => {
  document.documentElement.scrollTop = 0;
};

const jump = () => {
  window.location.href = "https://passport.woa.com/modules/passport/signin.ashx?url=http%3A%2F%2Fgacc.odpclp.oa.com%2F%23%2F"
};

const ask = () => {
  alert('111');
}

</script>

<template>
  <div>
    <div class="header">
      <h1 > GACC统一账号平台</h1>
      <ul class="menu">
          <li class="current">
            <a href="http://gacc.oa.com/">首页</a>
          </li>
           <li id="projectServiceID">
             <a href="http://odpclp.oa.com/" target="_blank">产品服务</a>
           </li>
           <li id="product_sub" @mouseover="() => state.isShow = true" >
             <a class="has-sub" href="javascript:;">帮助中心</a>
           </li>
        </ul>
       <button type="button" class="login" @click="jump">开始使用</button>
    </div>

    <div class="img">
       <ul v-if = "state.isShow" @mouseleave="() => state.isShow = false" class="sub-nav">
              <li> 
                 <a href="http://ce.oa.com/products/view/2340?&tab_id=all_issues_btn" target="_blank">用户反馈</a>
               </li>
              <li>
                <a href="http://gacc.odptcp.oa.com/#/businesApply" target="_blank">权限申请</a>
               </li>
               <li>
                <a href="https://iwiki.woa.com/space/gacc" target="_blank">文档中心</a>
              </li>
        </ul>      
        <img class="banner" src="../public/banner-cus-export1.png" alt="">
    </div>
    
      <ul class="targets">
      <li class="target">
        <img src="../public/target.png" alt="" >
        <h3>目标一</h3>
        <p>统一并拓展游戏大盘帐号信息流的服务渠道<br/>
           并通过建立以统一账户为核心的用户信息数据湖<br/>
           实现关键数据的统一归集<br/>
           丰富游戏帐号数据维度
        </p>
      </li>
      <li class="target">
        <img src="../public/mapping.png" alt="" >
        <h3>目标二</h3>
        <p>随着微信和手Q逐步关闭OpenID转QQ或<br/>
            commID的通道<br/>
            解决游戏间大盘用户联合分析的问题
        </p>
      </li>
      <li class="target">
        <img src="../public/relationship.png" alt="">
        <h3>目标三</h3>
        <p>降低游戏出海周边改造量，加快游戏出海进程<br/>
            降低数据合规成本
        </p>
      </li>
    </ul>
    
    <div class="bottom-container">
      <div class="services">
        <h2>服务功能</h2>
        <ul class="functions">
          <li>            
              <p>账号映射服务</p>
              <span>解决游戏出海合规</span>
          </li>
          <li>            
              <p>帐号互转服务</p>
              <span>满足各种应用场景</span>
          </li>
          <li>            
              <p>灵活的账号类型</p>
              <span>更适合业务的帐号服务</span>
          </li>
          <li>            
              <p>多场景的帐号绑定</p>
              <span>解决复杂的海外用户需求</span>
          </li>
          <li>            
              <p>渠道帐号加密</p>
              <span>满足渠道帐号隐私处理</span>
          </li>
          <li>            
              <p>隐私合规销号</p>
              <span>快速解决游戏销号难题</span>
          </li>
          <li>            
              <p>大盘用户联合分析</p>
              <span>提供更丰富的数据维度</span>
          </li>
          <li>            
              <p>帐号托管服务</p>
              <span>周边设施平滑迁移</span>
          </li>
          <li>            
              <p>账号运营管理</p>
              <span>提供完善的业务接入申请及账号管理等工具</span>
          </li>
        </ul>

        <div class="faqs">
          <h2>FAQ</h2>
        <div class="faqs-box">
          <div class="faq">
            Q: 什么是游戏统一账号？<br/>
            A: 统一账号是一套账号映射服务，它将游戏业务中各渠道的OpenID统一映射为游戏GopenID，解决游戏出海， 数据合规的一系列问题。
          </div>
          <div class="faq">
            Q: 统一账号的格式是什么样的？<br/>
            A: 统一账号类型根据业务可灵活配置，主要为：<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• 字符型<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;• 无符号整型<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;具体可咨询统一帐号助手（GACC助手）
          </div>
          <div class="faq">
            Q: 有了统一账号后，业务的的接入流程有哪些变化？<br/>
            A: 业务需要支持账号的长度。
          </div>
          <div class="faq"> 
            Q: 如何选择账号长度？<br/>
            A: 请根据实际情况选择，如果不清楚，可与游戏服务器开发人员获取建议。我们建议使用64位无符号整型。
          </div>
          <div class="faq">
           Q: 什么是游戏统一账号？<br/>
           A: 主要有以下变化：<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;• 接入统一账号后，游戏拿到的不再是渠道的OpenID，而是统一帐号的GOpenID；<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;• 游戏可以直接使用这个数据做用户数据在DB中的key；<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;• 与MSDK相关的接口，需要传递OpenID的参数，改成传递GOpenID或者参考MSDK的文档；<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;• IDIP请求传递给游戏业务的不再是OpenID，而是GOpenID，如果业务用它来做用户的key，可以直接定位到 用户，不再需要进一步转换；<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;• 业务受理也同时支持统一账号。
          </div>
          <div class="faq">
            Q: 统一账号有SDK吗？业务需要对接统一账号的SDK吗？<br/>
            A: 统一账号是一个后台服务，理论上对业务透明，所有服务访问通过MSDK代理，业务只需要和MSDK交互，没有 SDK对接工作量。
          </div>
          <div class="faq">
            Q: 统一账号有SDK吗？业务需要对接统一账号的SDK吗？<br/>
            A: 统一账号是一个后台服务，理论上对业务透明，所有服务访问通过MSDK代理，业务只需要和MSDK交互，没有 SDK对接工作量。
          </div>
          <div class="faq">
            Q: 业务接入统一帐号后，已有的基于OpenID的服务，以后的运营活动等该如何兼容？<br/>
            A: 已有的服务，会有托管服务进行兼容，对调用方无感知，主要调用方式不会发生变化。具体场景可咨询GACC助手。
          </div>
        </div>

        </div>
      </div>
    </div>

    <div class="fixed-box">
      <div class="consutation" @mouseover="() => state.isTextShow = true" @mouseleave="() => state.isTextShow = false">
        <img src="../public/customer-service.png" >
        <span v-if="state.isTextShow" @click="ask">在线咨询</span>
      </div>
      <div class="to-top" @click="toTop">
        返回<br/>顶部
      </div>
    </div>
    
    <div class="footer">游戏统一账号 Copyright © 1998 - 2022 Tencent. All Rights Reserved. 腾讯公司 版权所有</div>
  </div>
</template>

<style scoped>
 * {
   margin: 0px;
   padding: 0px;
   list-style: none;
   font: 12px/1.5 tahoma, arial, PingFang SC, Microsoft Yahei, sans-serif;
 }

 .header {
  position: relative;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 
 .header h1 {
   position: absolute;
   left: 30px;
   font-size:20px;
   font-weight: 400;
 }

 .menu {
  display: flex;
 }

.login {
  width: 82px;
  height: 32px;
  position: absolute;
  right: 30px;
  color: #447ed9;
  background-color: white;
  border: 1px solid #447ed9;
}

.login:hover {
  background-color: #447ed9;
  color: white;
}

.header li {
    margin-left: 20px;
    margin-right: 20px;
}

a:link {
  color: #333;
}

a:hover {
  color: #447ed9;
}

/* a:visited {
  color: #333;
} */


.img {
  position: relative;
}

.sub-nav {
  position: absolute;
  top: 0;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2e3643;
}

.sub-nav a {
  color: white;
  margin-left: 20px;
  margin-right: 20px;
}

.banner {
  width: 100%;
}

.targets {
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.target {
  text-align: center;
}

.target img {
  width: 72px;
  height: 72px;
}

.target h3 {
  padding: 20px 0;
  font-size: 18px;
}

.target h3:hover {
  color:#6b8fc5
}

.target p {
  font-size: 14px;
  width: 300px;
  height: 100px;
}

.bottom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  #eef4f9;
}

.bottom-container h2 {
  padding-top: 30px;
  font-size: 22px;
  color: #4b76b9;
  text-align: center;
}

.services {
  width: 950px;
}

.functions {
 margin: 20px 0;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
}

.functions li {
  padding: 30px;
  width: 300px;
  height: 120px;
  font-size: 12px;
  text-align: center;
  margin: 10px 0;
  background-color: white;
  background-image: url('../public/data_info_bg.png');
  background-position: bottom right;
  background-size: 35%;
  background-repeat: no-repeat; 
}

.functions li:hover {
  background-image: none;
  background-color: #19a0d4;
  color: white;
}

.functions p {
  font-size: 18px;
  margin-bottom: 5px;
}

.functions li:hover p {
  font-size: 14px;
}

.functions li:hover span {
  font-size: 16px;
}

.faqs {
  width: 950px;
}

.faqs h2 {
  padding-top: 0px;
  padding-bottom: 30px;
}

.faqs-box {
  padding: 20px;
  background-color: white;
}

.faq {
  padding: 20px 0;
  line-height: 30px;
}

.fixed-box{
  position: fixed;
  right: 0px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* justify-content: center; */
}

.consutation {
  padding: 5px 5px;
  color: white;
  display: flex;
  justify-content: space-around;
  background-color: #08a3e9;
  /* text-align: center; */
}

.consutation img {
 margin: 5px;
 width: 15px;
 height: 15px;
}

.consutation span {
  margin: 5px 0;
}

.to-top {
  width: 36px;
  height: 36px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2d4d5;
}

.footer {
  padding: 15px;
  text-align: center;
  color: white;
  background-color: #2f3644;
}

</style>
