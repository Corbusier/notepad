webpackJsonp([1],{"FH/y":function(t,e){},"I8/9":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("MVMM"),s=n("9rMa"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("\n\t\t记事本\n\t\t"),e("a",{staticClass:"t-btn",on:{click:this.showTools}},[e("span")])])])},staticRenderFns:[]};var a=n("vSla")({data:function(){return{}},methods:{showTools:function(){this.$emit("tools")}}},o,!1,function(t){n("FH/y")},null,null).exports,c=n("3cXf"),l=n.n(c),r={data:function(){return{}},props:["isShow"],computed:{getContent:function(){return l()(this.$store.state)}},methods:{downloadData:function(t,e){var n=document.createElement("a"),i=new Blob([e]);n.download=t,n.href=URL.createObjectURL(i),n.click(),URL.revokeObjectURL(i)},uploadData:function(){this.$emit("uploadData")},openTable:function(){this.$emit("openTable")},showDialog:function(){this.$emit("cleardialog")}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-tools",class:{"show-event-tools":t.isShow}},[n("ul",{staticClass:"tools-sidebar"},[n("li",[n("button",{staticClass:"tools-btn",on:{click:function(e){t.downloadData("notepad.txt",t.getContent)}}},[t._v("下载数据")])]),t._v(" "),n("li",[n("button",{staticClass:"tools-btn",on:{click:function(e){t.uploadData()}}},[t._v("导入数据")])]),t._v(" "),n("li",[n("button",{staticClass:"tools-btn",on:{click:t.openTable}},[t._v("编辑数据")])]),t._v(" "),n("li",[n("button",{staticClass:"tools-btn",on:{click:t.showDialog}},[t._v("清空数据")])])])])},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-add"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"n-input",attrs:{placeholder:"待办事项"},domProps:{value:t.content},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null},input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("button",{staticClass:"add-btn",on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[]};var d={data:function(){return{collapse:[{show:!0},{show:!0},{show:!0}]}},computed:{getToDo:function(){return this.$store.getters.getToDo},getDone:function(){return this.$store.getters.getDone},getCancel:function(){return this.$store.getters.getCancel}},methods:{changeCollapse:function(t,e){var n=this.collapse[t].show;1==n?this.closeCollapase(e):this.openCollapse(e),this.collapse[t].show=!n},closeCollapase:function(t){var e=t.currentTarget.nextElementSibling,n=e.getElementsByTagName("ul")[0];e.style.height=n.offsetHeight+"px",setTimeout(function(){e.style.height="0px",setTimeout(function(){e.style.display="none"},300)},10)},openCollapse:function(t){var e=t.currentTarget.nextElementSibling,n=e.getElementsByTagName("ul")[0];e.style.display="block",e.style.height=n.offsetHeight+"px",setTimeout(function(){e.style.height="auto"},300)},moveToDone:function(t){this.$store.dispatch("eventdone",t)},moveTodo:function(t){this.$store.dispatch("eventtodo",t)},moveCancel:function(t){this.$store.dispatch("eventcancel",t)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-content"},[n("div",{staticClass:"event-tab",on:{click:function(e){t.changeCollapse(0,e)}}},[t._v("未完成\n\t\t"),n("span",{class:{"close-span":!t.collapse[0].show}})]),t._v(" "),n("div",{staticClass:"event-box"},[n("ul",t._l(t.getToDo,function(e){return n("li",{staticClass:"event-list"},[n("input",{key:e.id,attrs:{type:"checkbox"},on:{click:function(n){t.moveToDone(e.id)}}}),t._v(" "),n("div",[t._v(t._s(e.content))]),t._v(" "),n("button",{staticClass:"cancel-btn",on:{click:function(n){t.moveCancel(e.id)}}},[t._v("取消")])])}))]),t._v(" "),n("div",{staticClass:"event-tab",on:{click:function(e){t.changeCollapse(1,e)}}},[t._v("已完成\n\t\t"),n("span",{class:{"close-span":!t.collapse[1].show}})]),t._v(" "),n("div",{staticClass:"event-box"},[n("ul",t._l(t.getDone,function(e){return n("li",{staticClass:"event-list"},[n("input",{attrs:{checked:"",type:"checkbox"},on:{click:function(n){t.moveTodo(e.id)}}}),t._v(" "),n("div",[t._v(t._s(e.content))]),t._v(" "),n("span",{staticClass:"event-time"},[t._v(t._s(e.time))])])}))]),t._v(" "),n("div",{staticClass:"event-tab",on:{click:function(e){t.changeCollapse(2,e)}}},[t._v("已取消\n\t\t"),n("span",{class:{"close-span":!t.collapse[2].show}})]),t._v(" "),n("div",{staticClass:"event-box"},[n("ul",t._l(t.getCancel,function(e){return n("li",{staticClass:"event-list"},[n("div",{staticClass:"event-delete"},[t._v(t._s(e.content))]),t._v(" "),n("button",{staticClass:"cancel-btn",on:{click:function(n){t.moveTodo(e.id)}}},[t._v("恢复")])])}))])])},staticRenderFns:[]};var p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"event-all",class:{"event-all-show":t.isShow}},[n("div",{staticClass:"table-box"},[n("div",{staticClass:"edit-input",class:{"edit-input-show":t.is_edit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.info.content,expression:"info.content"}],ref:"writeContent",domProps:{value:t.info.content},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.editData(e):null},input:function(e){e.target.composing||t.$set(t.info,"content",e.target.value)}}}),t._v(" "),n("button",{on:{click:t.editData}},[t._v("确定")])]),t._v(" "),n("div",{staticClass:"screen-box"},[n("div",{staticClass:"div-select",class:{active:t.active}},[n("div",{staticClass:"div-value",on:{click:function(e){t.active=!t.active}}},[t._v(t._s(t.getTypeName))]),t._v(" "),n("div",{staticClass:"div-select-body"},[n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(0)}}},[t._v(" \n\t\t\t\t\t\t\t筛选类型\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(1)}}},[t._v(" \n\t\t\t\t\t\t\t未完成\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(2)}}},[t._v(" \n\t\t\t\t\t\t\t已完成\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"div-option",on:{click:function(e){t.doSelect(3)}}},[t._v(" \n\t\t\t\t\t\t\t已取消\n\t\t\t\t\t\t")])])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.screen_title,expression:"screen_title"}],staticClass:"div-search",attrs:{placeholder:"筛选关键词"},domProps:{value:t.screen_title},on:{input:function(e){e.target.composing||(t.screen_title=e.target.value)}}})]),t._v(" "),n("table",{staticClass:"event-table"},[t._m(0),t._v(" "),n("tbody",t._l(t.notepad,function(e,i){return n("tr",[n("td",{attrs:{align:"center"}},[t._v(t._s(i+1))]),t._v(" "),n("td",[t._v(t._s(e.content))]),t._v(" "),n("td",{attrs:{align:"center"}},[t._v(t._s(t.getType(e.type)))]),t._v(" "),n("td",{staticStyle:{"font-size":"0"},attrs:{align:"center"}},[n("button",{on:{click:function(e){t.showInput(i)}}},[t._v("编辑")]),t._v(" "),n("button",{staticClass:"del-btn",on:{click:function(n){t.showDialog(i,e.id)}}},[t._v("删除")])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("#")]),this._v(" "),e("th",[this._v("所有事项")]),this._v(" "),e("th",{attrs:{width:""}},[this._v("类型")]),this._v(" "),e("th",{attrs:{width:""}},[this._v("操作")])])])}]};var h={data:function(){return{up_suc:!1,up_err:!1,events:""}},props:["msg"],methods:{sureEvent:function(){this.$emit("sure")},cancelEvent:function(){this.$emit("cancel")},sureUpload:function(){this.up_suc&&(this.$store.dispatch("uploadevent",this.events),this.cancelEvent())},upload:function(t){var e=this,n=t.srcElement.files,i=new FileReader;n[0]&&-1!==n[0].name.indexOf("notepad")?(i.onload=function(t){e.up_err=!1,e.up_suc=!0,e.events=t.target.result},i.readAsText(n[0])):(e.up_suc=!1,e.up_err=!0)}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog"},[n("div",{staticClass:"dialog-wrapper"},[t._m(0),t._v(" "),"upload"!=t.msg?n("div",{staticClass:"dialog-content"},[t._v("\n\t\t\t"+t._s(t.msg)+"\n\t\t")]):n("div",{staticClass:"dialog-content"},[n("input",{attrs:{type:"file",accept:"*.txt"},on:{change:t.upload}}),t._v(" "),n("p",[t._v("只允许上传由侧边栏下载的notepad.txt文件")]),t._v(" "),t.up_suc?n("p",[t._v("数据读取成功，是否确定导入？")]):t._e(),t._v(" "),t.up_err?n("p",[t._v("上传失败，只允许notepad.txt文件")]):t._e()]),t._v(" "),n("div",{staticClass:"dialog-btns"},[n("button",{staticClass:"cancel-btn",on:{click:t.cancelEvent}},[t._v("取消")]),t._v(" "),"upload"!==t.msg?n("button",{staticClass:"sure-btn",on:{click:t.sureEvent}},[t._v("确定")]):n("button",{staticClass:"sure-btn",on:{click:t.sureUpload}},[t._v("确定")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dialog-header"},[e("span",{staticClass:"dialog-header-title"},[this._v("提示")])])}]};var g={data:function(){return{tools:!1,table:!1,dialog:!1,tips:"",dialog_type:"",del_info:{index:0,id:0}}},components:{nHeader:a,nSidebar:n("vSla")(r,u,!1,function(t){n("bQFz")},null,null).exports,nAdd:n("vSla")({data:function(){return{content:""}},methods:{submit:function(){var t={id:0,type:1,content:"",time:""};this.content=this.content.trim(),this.content&&(t.content=this.content,this.$store.dispatch("addevent",t),this.content="",this.$toast("添加成功"))}}},v,!1,function(t){n("dg4+")},null,null).exports,nList:n("vSla")(d,f,!1,function(t){n("pFAJ")},null,null).exports,nTable:n("vSla")({data:function(){return{active:!1,is_edit:!1,screen_title:"",screen_type:0,info:{content:"",id:0,index:0}}},props:["isShow"],computed:{notepad:function(){var t=this;return t.$store.getters.getEventList.filter(function(e){if(0!==t.screen_type&&""===t.screen_title){if(e.type===t.screen_type)return e}else if(0!==t.screen_type&&""!==t.screen_title){if(e.type===t.screen_type&&-1!==e.content.indexOf(t.screen_title))return e}else{if(0!==t.screen_type||""===t.screen_title)return e;if(-1!==e.content.indexOf(t.screen_title))return e}})},getTypeName:function(){return this.getType(this.screen_type)||"筛选类型"}},methods:{getType:function(t){var e="";switch(t){case 1:e="未完成";break;case 2:e="已完成";break;case 3:e="已取消"}return e},doSelect:function(t){this.screen_type=t,this.active=!1},showInput:function(t){this.is_edit=!0,this.info={index:t,content:this.notepad[t].content,id:this.notepad[t].id},this.$refs.writeContent.focus()},editData:function(){this.info.content=this.info.content.trim(),this.info.content&&(this.$store.dispatch("editevent",this.info),this.is_edit=!1,this.$toast("保存成功"))},showDialog:function(t,e){this.$emit("deldialog",t,e)}}},p,!1,function(t){n("m1RL")},null,null).exports,nDialog:n("vSla")(h,_,!1,function(t){n("ZIGl")},null,null).exports},methods:{changePages:function(){this.table?this.table=!this.table:this.tools=!this.tools},uploadData:function(){this.tools=!1,this.dialog=!0,this.dialog_type="upload",this.tips="upload"},clearData:function(){this.tools=!1,this.dialog=!0,this.dialog_type="clear",this.tips="清空后无法恢复,确认清空吗?"},sureDialog:function(){switch(this.dialog_type){case"clear":this.$store.dispatch("clearevent"),this.$toast("清空数据成功");break;case"del":this.$store.dispatch("delevent",this.del_info),this.$toast("删除成功")}this.dialog=!1},delData:function(t,e){this.dialog=!0,this.dialog_type="del",this.tips="删除后无法恢复,确认删除吗?",this.del_info={index:t,id:e}}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blue",attrs:{id:"app"}},[n("n-header",{on:{tools:t.changePages}}),t._v(" "),n("section",{staticClass:"container",class:{hide:t.table}},[n("n-add"),t._v(" "),n("n-list"),t._v(" "),n("n-sidebar",{attrs:{"is-show":t.tools},on:{uploadData:t.uploadData,openTable:function(e){t.table=!0,t.tools=!1},cleardialog:t.clearData}})],1),t._v(" "),n("transition",{attrs:{name:"dialog"}},[n("n-dialog",{directives:[{name:"show",rawName:"v-show",value:t.dialog,expression:"dialog"}],attrs:{msg:t.tips},on:{cancel:function(e){t.dialog=!1},sure:t.sureDialog}})],1),t._v(" "),n("n-table",{attrs:{"is-show":t.table},on:{deldialog:t.delData}})],1)},staticRenderFns:[]};var b,C=n("vSla")(g,m,!1,function(t){n("Nfzt"),n("hLux")},null,null).exports,E=n("TPfW"),y=n.n(E),T=(n("I8/9"),new function(t){this.get=function(){return localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):""},this.set=function(e){localStorage.setItem(t,l()(e))},this.clear=function(){localStorage.removeItem(t)}}("notepad")),w=n("a3Yh"),D=n.n(w),k=(b={},D()(b,"ADDEVENT",function(t,e){t.count++,e.items.id=t.count,t.event.unshift(e.items),T.set(t)}),D()(b,"EVENTDONE",function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id===e.id){t.event[n].type=2,t.event[n].time=(s=void 0,void 0,s=new Date,o=parseInt(s.getMonth())+1,s.getFullYear()+"-"+o+"-"+s.getDate());var i=t.event[n];t.event.splice(n,1);break}var s,o;t.event.unshift(i),T.set(t)}),D()(b,"EVENTTODO",function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id===e.id){t.event[n].type=1;var i=t.event[n];t.event.splice(n,1);break}t.event.unshift(i),T.set(t)}),D()(b,"EVENTCANCEL",function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id===e.id){t.event[n].type=3;var i=t.event[n];t.event.splice(n,1);break}t.event.unshift(i),T.set(t)}),D()(b,"CLEAREVENT",function(t){t.event=[],T.clear()}),D()(b,"UPLOADEVENT",function(t,e){e=JSON.parse(e),t.event=e.event.event,t.count=e.event.count,T.set(t)}),D()(b,"EDITEVENT",function(t,e){console.log(t.event[e.index]),t.event[e.index].id===e.id?t.event[e.index].content=e.content:t.event.filter(function(t){t.id==e.id&&(t.content=e.content)}),T.set(t)}),D()(b,"DELEVENT",function(t,e){t.event[e.index].id===e.id?t.event.splice(e.index,1):t.event.filter(function(n,i){n.id==e.id&&t.event.splice(i,1)}),T.set(t)}),b),x={state:T.get()||{count:0,event:[]},actions:{addevent:function(t,e){return(0,t.commit)("ADDEVENT",{items:e})},eventdone:function(t,e){return(0,t.commit)("EVENTDONE",{id:e})},eventtodo:function(t,e){return(0,t.commit)("EVENTTODO",{id:e})},eventcancel:function(t,e){return(0,t.commit)("EVENTCANCEL",{id:e})},clearevent:function(t,e){return(0,t.commit)("CLEAREVENT")},uploadevent:function(t,e){return(0,t.commit)("UPLOADEVENT",e)},editevent:function(t,e){return(0,t.commit)("EDITEVENT",e)},delevent:function(t,e){return(0,t.commit)("DELEVENT",e)}},getters:{getEventList:function(t){return t.event},getToDo:function(t){return t.event.filter(function(t){if(1===t.type)return t})},getDone:function(t){return t.event.filter(function(t){if(2===t.type)return t})},getCancel:function(t){return t.event.filter(function(t){if(3===t.type)return t})}},mutations:k};i.a.use(s.a);var $=new s.a.Store({modules:{event:x}});i.a.use(y.a,{defaultType:"center"}),i.a.use(s.a),new i.a({el:"#app",components:{App:C},template:"<App/>",store:$})},Nfzt:function(t,e){},ZIGl:function(t,e){},bQFz:function(t,e){},"dg4+":function(t,e){},hLux:function(t,e){},m1RL:function(t,e){},pFAJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.501e91b387c42bcc2dc7.js.map