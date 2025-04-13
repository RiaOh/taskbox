import{f as m}from"./index-C2cC0QQF.js";import{j as s}from"./jsx-runtime-CBDCb4rg.js";import{g as R}from"./_commonjsHelpers-Cpj98o6Y.js";var S={exports:{}},D="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",N=D,j=N;function b(){}function v(){}v.resetWarningCache=b;var E=function(){function e(p,l,C,q,K,P){if(P!==j){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function a(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:v,resetWarningCache:b};return t.PropTypes=t,t};S.exports=E();var O=S.exports;const n=R(O);function c({task:{id:e,title:a,state:t},onArchiveTask:p,onPinTask:l}){return s.jsxs("div",{className:`list-item ${t}`,children:[s.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[s.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:t==="TASK_ARCHIVED"}),s.jsx("span",{className:"checkbox-custom",onClick:()=>p(e)})]}),s.jsx("label",{htmlFor:`title-${e}`,"aria-label":a,className:"title",children:s.jsx("input",{type:"text",value:a,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),t!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",onClick:()=>l(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:s.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}c.propTypes={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onArchiveTask:n.func,onPinTask:n.func};c.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}};const A={onArchiveTask:m(),onPinTask:m()},I={component:c,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...A}},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...r.args.task,state:"TASK_PINNED"}}},i={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var d,T,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var h,f,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,_,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const $=["ActionsData","Default","Pinned","Archived"],W=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:A,Archived:i,Default:r,Pinned:o,__namedExportsOrder:$,default:I},Symbol.toStringTag,{value:"Module"}));export{A,r as D,c as T,W as a};
