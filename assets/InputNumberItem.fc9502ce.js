import{B as a,bz as o,a1 as p,D as m,F as i,J as u,K as l,w as c,a5 as d,L as _}from"./vendor.bf608252.js";/* empty css               */import{_ as f,a as b}from"./index.b1bdbfac.js";import{b as g}from"./index.ce7dc036.js";import"./index.6d15fd8b.js";/* empty css               *//* empty css                */import"./index.5bc5e2d3.js";import"./index.28fc104f.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.0a4e9dd5.js";/* empty css               */import"./lock.fc65a984.js";const v=a({name:"InputNumberItem",components:{InputNumber:o},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:t}=b("setting-input-number-item");function n(r){e.event&&g(e.event,r)}return{prefixCls:t,handleChange:n}}});function C(e,t,n,r,I,N){const s=p("InputNumber");return m(),i("div",{class:_(e.prefixCls)},[u("span",null,l(e.title),1),c(s,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}var H=f(v,[["render",C],["__scopeId","data-v-4c1dd0d9"]]);export{H as default};