"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[961],{9961:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});a(4114);var r=a(6768),n=a(144),o=a(4232),l=a(1387),c=a(8126),s=a(4751),u=a(7387),i=a(6347),d=a(5147);const m={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},p=(0,r.Lk)("path",{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z",fill:"currentColor"},null,-1),k=[p];var g=(0,r.pM)({name:"CaretRightOutlined",render:function(e,t){return(0,r.uX)(),(0,r.CE)("svg",m,k)}});const v={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},y=(0,r.Lk)("path",{d:"M19.5 13.572L12 21l-7.5-7.428m0 0A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),h=[y];var f=(0,r.pM)({name:"Heart",render:function(e,t){return(0,r.uX)(),(0,r.CE)("svg",v,h)}});const _={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},w=(0,r.Fv)('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20l1.3-3.9A9 8 0 1 1 7.7 19L3 20"></path><path d="M12 12v.01"></path><path d="M8 12v.01"></path><path d="M16 12v.01"></path></g>',1),b=[w];var L=(0,r.pM)({name:"MessageCircle",render:function(e,t){return(0,r.uX)(),(0,r.CE)("svg",_,b)}});const D={key:0},x={class:"comment-content"},C={class:"comment-avatar"},F={class:"comment-info"},X={class:"comment-name"},W={class:"comment-text"},R={class:"comment-footer"},I={style:{"margin-right":"10px"}},E={class:"comment-reply-content"},Q={key:0,class:"comment-content"},z={class:"comment-reply-avatar"},M={class:"comment-info"},A={class:"comment-name"},B={style:{color:"#999","font-size":"12px","font-weight":"normal"}},K={style:{color:"#999","font-size":"12px","font-weight":"normal"}},S={class:"comment-text"},T={class:"comment-footer"},j={style:{"margin-right":"10px"}},H=["onClick"],P=["onClick"];var V={__name:"CommentBox",props:{data:{type:Object,default:()=>({})}},emits:["reply","like"],setup(e,{emit:t}){const a=t,l=e=>{a("reply",e)},c=e=>{a("like",e)};return(t,a)=>{const s=(0,r.g2)("n-avatar"),u=(0,r.g2)("n-icon");return e.data.is_check?((0,r.uX)(),(0,r.CE)("div",D,[(0,r.Lk)("div",x,[(0,r.Lk)("div",C,[(0,r.bF)(s,{size:45,src:e.data.user.avatar,round:""},null,8,["src"])]),(0,r.Lk)("div",F,[(0,r.Lk)("div",X,(0,o.v_)(e.data.user.nickname),1),(0,r.Lk)("div",W,(0,o.v_)(e.data.content),1),(0,r.Lk)("div",R,[(0,r.Lk)("span",I,"发布于 "+(0,o.v_)(e.data.create_time),1),(0,r.Lk)("span",{class:"comment-reply",onClick:a[0]||(a[0]=t=>c(e.data))},[(0,r.bF)(u,{component:(0,n.R1)(f),size:"20"},null,8,["component"])]),(0,r.Lk)("span",{class:"comment-reply",onClick:a[1]||(a[1]=t=>l(e.data))},[(0,r.bF)(u,{component:(0,n.R1)(L),size:"20"},null,8,["component"])])])])]),(0,r.Lk)("div",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.data.reply,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:e.id},[e.is_check?((0,r.uX)(),(0,r.CE)("div",Q,[(0,r.Lk)("div",z,[(0,r.bF)(s,{size:45,src:e.user.avatar,round:""},null,8,["src"])]),(0,r.Lk)("div",M,[(0,r.Lk)("div",A,[(0,r.eW)((0,o.v_)(e.user.nickname)+" ",1),(0,r.Lk)("span",B,[(0,r.bF)(u,{component:(0,n.R1)(g),size:"12"},null,8,["component"])]),(0,r.eW)(" "+(0,o.v_)(e.to.user.nickname)+" ",1),(0,r.Lk)("span",K,"关于 "+(0,o.v_)(e.to.content),1)]),(0,r.Lk)("div",S,(0,o.v_)(e.content),1),(0,r.Lk)("div",T,[(0,r.Lk)("span",j,"发布于 "+(0,o.v_)(e.create_time),1),(0,r.Lk)("span",{class:"comment-reply",onClick:t=>c(e)},[(0,r.bF)(u,{component:(0,n.R1)(f),size:"20"},null,8,["component"])],8,H),(0,r.Lk)("span",{class:"comment-reply",onClick:t=>l(e)},[(0,r.bF)(u,{component:(0,n.R1)(L),size:"20"},null,8,["component"])],8,P)])])])):(0,r.Q3)("",!0)])))),128))])])):(0,r.Q3)("",!0)}}},q=a(1241);const O=(0,q.A)(V,[["__scopeId","data-v-95caead2"]]);var J=O,U=a(9958);const G=e=>((0,r.Qi)("data-v-428df668"),e=e(),(0,r.jt)(),e),N={class:"resource-header"},Y={key:0,class:"resource-tags"},Z={class:"resource-content"},$={key:0,class:"resource-video"},ee={key:1,class:"resource-image"},te=["alt","src"],ae={class:"resource-text"},re=["innerHTML"],ne=["innerHTML"],oe={key:5,class:"resource-url"},le={key:0,class:"url"},ce=G((()=>(0,r.Lk)("i",{class:"gcfont gc-baiduyun"},null,-1))),se={key:1,class:"url"},ue=G((()=>(0,r.Lk)("i",{class:"gcfont gc-tianyiyun"},null,-1))),ie={key:2,class:"url"},de=G((()=>(0,r.Lk)("i",{class:"gcfont gc-aliyun"},null,-1))),me={key:7,class:"resource-active_code"},pe={class:"resource-comment"},ke={class:"comment-input-box"},ge={style:{display:"flex","justify-content":"flex-end","align-items":"center","margin-top":"10px"}};var ve={__name:"Resource",setup(e){const{toClipboard:t}=(0,U.A)(),a=(0,s.z)(),m=(0,l.rd)(),p=(0,u.J)(),k=(0,n.Kh)({width:"100%",height:"450px",color:"#18a058",title:"",src:"",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!1,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0,controlBtns:["audioTrack","quality","speedRate","volume","setting","pip","pageFullScreen","fullScreen"]}),g=(0,n.Kh)({loading:!1,resourceData:{},showVideo:!0,showImage:!0,commentData:[],comment:"",currentReply:"",inputPlaceholder:"来说点啥不，听听你的意见？"}),v=(0,n.Kh)({resourceId:m.currentRoute.value.query.resourceId}),y=()=>{a.start(),(0,c.AI)(v).then((e=>{if(200===e.data.code){g.resourceData=e.data.data,g.commentData=e.data.data.comments;try{k.src=g.resourceData.videos[0].video,k.title=g.resourceData.name,g.showVideo=!0}catch(t){g.resourceData.videos=[],g.showVideo=!1}try{g.resourceData.images=g.resourceData.images.filter((e=>e.image)),g.showImage=!0}catch(t){g.resourceData.images=[],g.showImage=!1}0===g.resourceData.images.length&&(g.showImage=!1),a.finish()}else 400===e.data.code?(a.error(),p.error(e.data.msg)):401===e.data.code&&(a.error(),p.warning(e.data.msg))})).catch((e=>{p.error("资源加载失败"),a.error()}))};y(),(0,r.wB)((()=>m.currentRoute.value.query.resourceId),((e,t)=>{v.resourceId=m.currentRoute.value.query.resourceId,y()}));const h=async e=>{if(navigator.clipboard)await navigator.clipboard.writeText(e).then((()=>{p.success("复制成功")})).catch((e=>{p.error(e.message)}));else try{await t(e),p.success("复制成功")}catch(a){p.error(a.message)}},f=()=>{localStorage.getItem("token")||(p.warning("请先登录"),m.push("/login")),g.comment.length>200?p.warning("评论内容不能超过200个字符"):0!==g.comment.length?(0,c.Sz)({comment:g.comment,resourceId:g.resourceData.id}).then((e=>{200===e.data.code&&(y(),g.comment="",p.success(e.data.msg))})):p.warning("评论内容不能为空")},_=e=>{g.currentReply=e},w=e=>{localStorage.getItem("token")||(p.warning("请先登录"),m.push("/login")),p.success("点赞成功")},b=()=>{g.currentReply="",g.comment=""},L=()=>{localStorage.getItem("token")||(p.warning("请先登录"),m.push("/login")),g.comment.length>200?p.warning("评论内容不能超过200个字符"):0!==g.comment.length?(0,c.Sz)({comment:g.comment,resourceId:g.resourceData.id,replyId:g.currentReply.id}).then((e=>{200===e.data.code&&(y(),g.comment="",g.currentReply="",p.success(e.data.msg))})):p.warning("评论内容不能为空")};return(0,r.wB)((()=>g.currentReply),((e,t)=>{g.inputPlaceholder=e?"回复 "+g.currentReply.user.nickname+" 关于 "+g.currentReply.content:"来说点啥不，听听你的意见？"})),(e,t)=>{const a=(0,r.g2)("n-icon"),l=(0,r.g2)("n-tag"),c=(0,r.g2)("n-page-header"),s=(0,r.g2)("vue3VideoPlay"),u=(0,r.g2)("n-card"),p=(0,r.g2)("n-carousel-item"),v=(0,r.g2)("n-carousel"),y=(0,r.g2)("n-h5"),D=(0,r.g2)("n-a"),x=(0,r.g2)("n-button"),C=(0,r.g2)("n-input"),F=(0,r.g2)("n-scrollbar");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",N,[(0,r.bF)(c,{title:g.resourceData.name,subtitle:"资源详情",onBack:t[0]||(t[0]=e=>(0,n.R1)(m).go(-1))},{extra:(0,r.k6)((()=>[g.resourceData.tags?((0,r.uX)(),(0,r.CE)("div",Y,[(0,r.bF)(l,{bordered:"",size:"small",style:{"margin-left":"5px"},type:"success"},{icon:(0,r.k6)((()=>[(0,r.bF)(a,{component:(0,n.R1)(i.A),size:"16"},null,8,["component"])])),default:(0,r.k6)((()=>[(0,r.eW)(" "+(0,o.v_)(g.resourceData.category.name),1)])),_:1}),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(g.resourceData.tags,((e,t)=>((0,r.uX)(),(0,r.Wv)(l,{key:t,bordered:"",size:"small",style:{"margin-left":"5px"},type:"info"},{icon:(0,r.k6)((()=>[(0,r.bF)(a,{component:(0,n.R1)(d.A),size:"16"},null,8,["component"])])),default:(0,r.k6)((()=>[(0,r.eW)(" "+(0,o.v_)(e.name),1)])),_:2},1024)))),128))])):(0,r.Q3)("",!0)])),_:1},8,["title"])]),(0,r.Lk)("div",Z,[(0,r.bF)(F,null,{default:(0,r.k6)((()=>[g.showVideo&&!g.loading?((0,r.uX)(),(0,r.CE)("div",$,[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(s,(0,r.v6)({poster:g.resourceData.cover},k),null,16,["poster"])])),_:1})])):(0,r.Q3)("",!0),g.showImage&&!g.loading?((0,r.uX)(),(0,r.CE)("div",ee,[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(v,{"autoplay-speed":1e3,loop:!0,"show-arrow":!1,autoplay:"",draggable:""},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(g.resourceData.images,((e,t)=>((0,r.uX)(),(0,r.Wv)(p,{key:t},{default:(0,r.k6)((()=>[(0,r.Lk)("img",{alt:e.name,src:e.image,class:"carousel-img"},null,8,te)])),_:2},1024)))),128))])),_:1})])),_:1})])):(0,r.Q3)("",!0),(0,r.Lk)("div",ae,[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[g.resourceData.description&&!g.loading?((0,r.uX)(),(0,r.Wv)(y,{key:0,prefix:"bar",type:"success"},{default:(0,r.k6)((()=>[(0,r.eW)("资源介绍")])),_:1})):(0,r.Q3)("",!0),g.resourceData.description&&!g.loading?((0,r.uX)(),(0,r.CE)("div",{key:1,class:"resource-description",innerHTML:g.resourceData.description},null,8,re)):(0,r.Q3)("",!0),g.resourceData.content&&!g.loading?((0,r.uX)(),(0,r.Wv)(y,{key:2,prefix:"bar",type:"success"},{default:(0,r.k6)((()=>[(0,r.eW)("资源内容")])),_:1})):(0,r.Q3)("",!0),g.resourceData.content&&!g.loading?((0,r.uX)(),(0,r.CE)("div",{key:3,class:"resource-content",innerHTML:g.resourceData.content},null,8,ne)):(0,r.Q3)("",!0),g.resourceData.url&&!g.loading?((0,r.uX)(),(0,r.Wv)(y,{key:4,prefix:"bar",type:"success"},{default:(0,r.k6)((()=>[(0,r.eW)("下载地址")])),_:1})):(0,r.Q3)("",!0),g.resourceData.url&&!g.loading?((0,r.uX)(),(0,r.CE)("div",oe,[g.resourceData.url.baidu_url?((0,r.uX)(),(0,r.CE)("div",le,[(0,r.Lk)("span",null,[ce,(0,r.eW)(" 百度网盘："),(0,r.bF)(D,{href:g.resourceData.url.baidu_url,target:"_blank"},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(g.resourceData.url.baidu_url),1)])),_:1},8,["href"])])])):(0,r.Q3)("",!0),g.resourceData.url.tianyi_url?((0,r.uX)(),(0,r.CE)("div",se,[(0,r.Lk)("span",null,[ue,(0,r.eW)(" 天翼云："),(0,r.bF)(D,{href:g.resourceData.url.tianyi_url,target:"_blank"},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(g.resourceData.url.tianyi_url),1)])),_:1},8,["href"])])])):(0,r.Q3)("",!0),g.resourceData.url.aliyun_url?((0,r.uX)(),(0,r.CE)("div",ie,[(0,r.Lk)("span",null,[de,(0,r.eW)(" 阿里云："),(0,r.bF)(D,{href:g.resourceData.url.aliyun_url,target:"_blank"},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(g.resourceData.url.aliyun_url),1)])),_:1},8,["href"])])])):(0,r.Q3)("",!0)])):(0,r.Q3)("",!0),g.resourceData.active_code&&!g.loading?((0,r.uX)(),(0,r.Wv)(y,{key:6,prefix:"bar",type:"success"},{default:(0,r.k6)((()=>[(0,r.eW)("激活码")])),_:1})):(0,r.Q3)("",!0),g.resourceData.active_code&&!g.loading?((0,r.uX)(),(0,r.CE)("div",me,[(0,r.bF)(x,{size:"small",type:"primary",onClick:t[1]||(t[1]=e=>h(g.resourceData.active_code))},{default:(0,r.k6)((()=>[(0,r.eW)(" 激活码："+(0,o.v_)(g.resourceData.active_code),1)])),_:1})])):(0,r.Q3)("",!0)])),_:1})]),(0,r.Lk)("div",pe,[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(y,{prefix:"bar",type:"success"},{default:(0,r.k6)((()=>[(0,r.eW)("评论")])),_:1}),(0,r.Lk)("div",ke,[(0,r.bF)(C,{value:g.comment,"onUpdate:value":t[2]||(t[2]=e=>g.comment=e),placeholder:g.inputPlaceholder,rows:"4",type:"textarea"},null,8,["value","placeholder"]),(0,r.Lk)("div",ge,[g.currentReply?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)(x,{key:0,style:{"margin-left":"10px"},type:"primary",onClick:f},{default:(0,r.k6)((()=>[(0,r.eW)(" 发表评论 ")])),_:1})),g.currentReply?((0,r.uX)(),(0,r.Wv)(x,{key:1,style:{"margin-left":"10px"},type:"default",onClick:b},{default:(0,r.k6)((()=>[(0,r.eW)(" 取消 ")])),_:1})):(0,r.Q3)("",!0),g.currentReply?((0,r.uX)(),(0,r.Wv)(x,{key:2,style:{"margin-left":"10px"},type:"primary",onClick:L},{default:(0,r.k6)((()=>[(0,r.eW)("回复 ")])),_:1})):(0,r.Q3)("",!0)])]),g.commentData&&!g.loading?((0,r.uX)(!0),(0,r.CE)(r.FK,{key:0},(0,r.pI)(g.commentData,((e,t)=>((0,r.uX)(),(0,r.Wv)(J,{key:t,data:e,class:"comment-item",onLike:w,onReply:_},null,8,["data"])))),128)):(0,r.Q3)("",!0)])),_:1})])])),_:1})])],64)}}};const ye=(0,q.A)(ve,[["__scopeId","data-v-428df668"]]);var he=ye}}]);
//# sourceMappingURL=961.0b7b902b.js.map