(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0632d1a6"],{"11f6":function(e,t,l){},"13f0":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"components-container"},[l("el-drag-select",{staticStyle:{width:"500px"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),l("div",{staticStyle:{"margin-top":"30px"}},e._l(e.value,(function(t){return l("el-tag",{key:t,staticStyle:{"margin-right":"15px"}},[e._v("\n      "+e._s(t)+"\n    ")])})),1)],1)},n=[],s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-select",e._g(e._b({ref:"dragSelect",staticClass:"drag-select",attrs:{multiple:""},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},"el-select",e.$attrs,!1),e.$listeners),[e._t("default")],2)},r=[],c=l("75fc"),u=l("53fe"),i=l.n(u),o={name:"DragSelect",props:{value:{type:Array,required:!0}},computed:{selectVal:{get:function(){return Object(c["a"])(this.value)},set:function(e){this.$emit("input",Object(c["a"])(e))}}},mounted:function(){this.setSort()},methods:{setSort:function(){var e=this,t=this.$refs.dragSelect.$el.querySelectorAll(".el-select__tags > span")[0];this.sortable=i.a.create(t,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:function(t){var l=e.value.splice(t.oldIndex,1)[0];e.value.splice(t.newIndex,0,l)}})}}},p=o,v=(l("c4c2"),l("2877")),f=Object(v["a"])(p,s,r,!1,null,"6046d094",null),d=f.exports,b={name:"DragSelectDemo",components:{ElDragSelect:d},data:function(){return{value:["Apple","Banana","Orange"],options:[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Pear",label:"Pear"},{value:"Strawberry",label:"Strawberry"}]}}},g=b,m=Object(v["a"])(g,a,n,!1,null,null,null);t["default"]=m.exports},c4c2:function(e,t,l){"use strict";l("11f6")}}]);