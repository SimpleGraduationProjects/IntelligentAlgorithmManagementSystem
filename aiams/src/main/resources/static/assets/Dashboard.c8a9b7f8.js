import{_ as a}from"./vue-schart.b7b560aa.js";import{a as e}from"./index.9b1ea08c.js";import{z as t,p as l,a as s,r as d,o as n,c as o,f as i,t as r,w as c,h as u}from"./vendor.e4999bcf.js";const p={name:"dashboard",components:{Schart:a},setup(){const a=localStorage.getItem("ms_username"),e="admin"===a?"超级管理员":"普通用户";return{name:a,data:t([{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}]),options:{type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]},todoList:t([{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}]),role:e}}},g=c();l("data-v-5c851540");const v={class:"user-info"},h=i("img",{src:e,class:"user-avator",alt:""},null,-1),f={class:"user-info-cont"},m={class:"user-info-name"},b=i("div",{class:"user-info-list"},[u(" 上次登录时间： "),i("span",null,"2019-11-01")],-1),_=i("div",{class:"user-info-list"},[u(" 上次登录地点： "),i("span",null,"东莞")],-1),x=i("div",{class:"clearfix"},[i("span",null,"当前最优模型表现")],-1),w=u(" Precision "),y=u(" Recall "),I=u(" F-Measure "),V=u(" mAP "),j=i("div",{class:"grid-content grid-con-1"},[i("i",{class:"el-icon-lx-tag grid-con-icon"}),i("div",{class:"grid-cont-right"},[i("div",{class:"grid-num"},"1234"),i("div",null,"样本数量")])],-1),k=i("div",{class:"grid-content grid-con-2"},[i("i",{class:"el-icon-lx-roundcheck grid-con-icon"}),i("div",{class:"grid-cont-right"},[i("div",{class:"grid-num"},"321"),i("div",null,"训练完成模型")])],-1),L=i("div",{class:"grid-content grid-con-3"},[i("i",{class:"el-icon-lx-settings grid-con-icon"}),i("div",{class:"grid-cont-right"},[i("div",{class:"grid-num"},"5000"),i("div",null,"训练中模型")])],-1),P={class:"clearfix"},R=i("span",null,"待办事项",-1),S=u("添加"),U=i("template",null,[i("i",{class:"el-icon-edit"}),i("i",{class:"el-icon-delete"})],-1);s();const z=g(((a,e,t,l,s,c)=>{const u=d("el-card"),p=d("el-progress"),z=d("el-col"),A=d("el-row"),F=d("el-button"),M=d("el-checkbox"),q=d("el-table-column"),B=d("el-table"),C=d("schart");return n(),o("div",null,[i(A,{gutter:20},{default:g((()=>[i(z,{span:8},{default:g((()=>[i(u,{shadow:"hover",class:"mgb20",style:{height:"252px"}},{default:g((()=>[i("div",v,[h,i("div",f,[i("div",m,r(l.name),1),i("div",null,r(l.role),1)])]),b,_])),_:1}),i(u,{shadow:"hover",style:{height:"252px"}},{header:g((()=>[x])),default:g((()=>[w,i(p,{percentage:71.3,color:"#42b983"},null,8,["percentage"]),y,i(p,{percentage:85.1,color:"#f1e05a"},null,8,["percentage"]),I,i(p,{percentage:82.7},null,8,["percentage"]),V,i(p,{percentage:85.9,color:"#f56c6c"},null,8,["percentage"])])),_:1})])),_:1}),i(z,{span:16},{default:g((()=>[i(A,{gutter:20,class:"mgb20"},{default:g((()=>[i(z,{span:8},{default:g((()=>[i(u,{shadow:"hover","body-style":{padding:"0px"}},{default:g((()=>[j])),_:1})])),_:1}),i(z,{span:8},{default:g((()=>[i(u,{shadow:"hover","body-style":{padding:"0px"}},{default:g((()=>[k])),_:1})])),_:1}),i(z,{span:8},{default:g((()=>[i(u,{shadow:"hover","body-style":{padding:"0px"}},{default:g((()=>[L])),_:1})])),_:1})])),_:1}),i(u,{shadow:"hover",style:{height:"403px"}},{header:g((()=>[i("div",P,[R,i(F,{style:{float:"right",padding:"3px 0"},type:"text"},{default:g((()=>[S])),_:1})])])),default:g((()=>[i(B,{"show-header":!1,data:l.todoList,style:{width:"100%"}},{default:g((()=>[i(q,{width:"40"},{default:g((a=>[i(M,{modelValue:a.row.status,"onUpdate:modelValue":e=>a.row.status=e},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(q,null,{default:g((a=>[i("div",{class:["todo-item",{"todo-item-del":a.row.status}]},r(a.row.title),3)])),_:1}),i(q,{width:"60"},{default:g((()=>[U])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1}),i(A,{gutter:20},{default:g((()=>[i(z,{span:12},{default:g((()=>[i(u,{shadow:"hover"},{default:g((()=>[i(C,{ref:"bar",class:"schart",canvasId:"bar",options:l.options},null,8,["options"])])),_:1})])),_:1}),i(z,{span:12},{default:g((()=>[i(u,{shadow:"hover"},{default:g((()=>[i(C,{ref:"line",class:"schart",canvasId:"line",options:l.options2},null,8,["options"])])),_:1})])),_:1})])),_:1})])}));p.render=z,p.__scopeId="data-v-5c851540";export default p;
