import{d as f,o as d,e as u,f as t,j as b,n as _,g as m}from"./iframe-BvXhojQz.js";const y=["for","aria-label"],S=["checked","name","id"],D=["for","aria-label"],A=["value","id"],E=["id","aria-label"],o=f({__name:"Task",props:{task:{},onArchiveTask:{type:Function},onPinTask:{type:Function}},emits:["archive-task","pin-task"],setup(e,{emit:T}){const i=e,h=m(()=>`list-item ${i.task.state}`),c=m(()=>i.task.state==="TASK_ARCHIVED"),l=T;function g(){l("archive-task",i.task.id)}function v(){l("pin-task",i.task.id)}return(N,k)=>(d(),u("div",{class:_(h.value)},[t("label",{for:"checked"+e.task.id,"aria-label":"archiveTask-"+e.task.id,class:"checkbox"},[t("input",{type:"checkbox",checked:c.value,disabled:"",name:"checked"+e.task.id,id:"archiveTask-"+e.task.id},null,8,S),t("span",{class:"checkbox-custom",onClick:g})],8,y),t("label",{for:"title-"+e.task.id,"aria-label":e.task.title,class:"title"},[t("input",{type:"text",readonly:"",value:e.task.title,id:"title-"+e.task.id,name:"title",placeholder:"Input title"},null,8,A)],8,D),c.value?b("",!0):(d(),u("button",{key:0,class:"pin-button",onClick:v,id:"pinTask-"+e.task.id,"aria-label":"pinTask-"+e.task.id},[...k[0]||(k[0]=[t("span",{class:"icon-star"},null,-1)])],8,E))],2))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"Task",description:"",tags:{},props:[{name:"task",description:"Composition of the task",required:!0,type:{name:"TaskData"}},{name:"onArchiveTask",description:"Event to change the task to archived",required:!0,type:{name:"TSFunctionType"}},{name:"onPinTask",description:"Event to change the task to pinned",required:!0,type:{name:"TSFunctionType"}}],events:[{name:"archive-task",type:{names:["string"]}},{name:"pin-task",type:{names:["string"]}}],sourceFiles:["/Users/e.shilina/2026/taskbox/src/components/Task.vue"]});const{fn:p}=__STORYBOOK_MODULE_TEST__,r={id:"1",title:"Test Task",state:"TASK_INBOX",events:{onArchiveTask:p(),onPinTask:p()}},x={component:o,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...r.events}},a={args:{task:r}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    task: TaskData
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...n.parameters?.docs?.source}}};const C=["TaskData","Default","Pinned","Archived"],I=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:a,Pinned:s,TaskData:r,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{r as T,o as _,I as a};
