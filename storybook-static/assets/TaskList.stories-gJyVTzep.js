import{j as a}from"./jsx-runtime-CBDCb4rg.js";import{T as _,A as E,D as s}from"./Task.stories-BRSrr6W1.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2cC0QQF.js";function h({loading:n,tasks:o,onPinTask:N,onArchiveTask:j}){const L={onPinTask:N,onArchiveTask:j};return n?a.jsx("div",{className:"list-items",children:"loading"}):o.length===0?a.jsx("div",{className:"list-items",children:"empty"}):a.jsx("div",{className:"list-items",children:o.map(d=>a.jsx(_,{task:d,...L},d.id))})}h.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const K={component:h,title:"TaskList",decorators:[n=>a.jsx("div",{style:{margin:"3rem"},children:n()})],tags:["autodocs"],args:{...E}},t={args:{tasks:[{...s.args.task,id:"1",title:"Task 1"},{...s.args.task,id:"2",title:"Task 2"},{...s.args.task,id:"3",title:"Task 3"},{...s.args.task,id:"4",title:"Task 4"},{...s.args.task,id:"5",title:"Task 5"},{...s.args.task,id:"6",title:"Task 6"}]}},r={args:{tasks:[...t.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},e={args:{tasks:[],loading:!0}},i={args:{...e.args,loading:!1}};var l,c,k;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tasks: [{
      ...TaskStories.Default.args.task,
      id: "1",
      title: "Task 1"
    }, {
      ...TaskStories.Default.args.task,
      id: "2",
      title: "Task 2"
    }, {
      ...TaskStories.Default.args.task,
      id: "3",
      title: "Task 3"
    }, {
      ...TaskStories.Default.args.task,
      id: "4",
      title: "Task 4"
    }, {
      ...TaskStories.Default.args.task,
      id: "5",
      title: "Task 5"
    }, {
      ...TaskStories.Default.args.task,
      id: "6",
      title: "Task 6"
    }]
  }
}`,...(k=(c=t.parameters)==null?void 0:c.docs)==null?void 0:k.source}}};var g,m,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }]
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,T,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(f=(T=e.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var D,S,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Loading.args,
    loading: false
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const W=["Default","WithPinnedTasks","Loading","Empty"];export{t as Default,i as Empty,e as Loading,r as WithPinnedTasks,W as __namedExportsOrder,K as default};
