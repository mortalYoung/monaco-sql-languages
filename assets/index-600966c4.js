import{c as l,r as m,j as r,o as v,I as x}from"./index-fc391d71.js";const n={container:"mo-menuBar__container",item:"mo-menuBar__item",name:"mo-menuBar__name"};function h({onSelect:s,onContextMenu:e}){const d=l("menuBar"),[o,t]=m.useState(void 0),p=a=>{o&&o!==a&&t(a)};return r.jsx("section",{className:n.container,role:"menuBar",onContextMenu:a=>{a.preventDefault(),a.stopPropagation(),e==null||e({x:a.pageX,y:a.pageY})},children:d.data.map(a=>{var c;return r.jsx(v,{trigger:"click",data:a.children,visible:o===a.id,onClick:i=>{t(void 0),s==null||s(i)},onVisibleChange:i=>{t(i?a.id:void 0)},children:r.jsx("span",{className:n.item,onMouseEnter:()=>p(a.id),onContextMenu:i=>{i.stopPropagation(),i.preventDefault()},children:((c=a.render)==null?void 0:c.call(a,a))||r.jsx("span",{className:n.name,tabIndex:0,children:a.name||r.jsx(x,{type:a.icon})||""})})},a.id)})})}export{h as default};
