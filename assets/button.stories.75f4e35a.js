var T=Object.defineProperty;var a=(t,e)=>T(t,"name",{value:e,configurable:!0});import{a as b,j as c,R as p}from"./jsx-runtime.f6d9a1f7.js";import"./iframe.85e0b790.js";function y(...t){return t.filter(Boolean).join(" ")}a(y,"classNames");var f=(t=>(t.xs="c-px-2.5 c-py-1.5 c-text-xs c-font-medium",t.sm="c-px-3 c-py-2 c-text-sm c-font-medium",t.md="c-px-4 c-py-2 c-text-sm c-font-medium",t.lg="c-px-4 c-py-2 c-text-base c-font-medium",t.xl="c-px-6 c-py-3 c-text-base c-font-medium",t))(f||{}),h=(t=>(t.primary="c-border-transparent c-bg-indigo-600 c-text-white hover:c-bg-indigo-700 ",t.secondary="c-border-transparent c-bg-indigo-100 c-text-indigo-700 hover:c-bg-indigo-200",t.white="c-border-gray-300 c-bg-white c-text-gray-700 hover:c-bg-gray-50",t))(h||{});const _="c-inline-flex c-items-center c-rounded c-border c-shadow-sm focus:c-outline-none focus:c-ring-2 focus:c-ring-indigo-500 focus:c-ring-offset-2",I="c-border-transparent c-bg-gray-100 c-cursor-not-allowed c-text-gray-300",g=a(({title:t,size:e="md",btnStyle:n="primary",LeadingIcon:r,TrailingIcon:o,disabled:s,className:u,...m})=>b("button",{...m,disabled:s,className:y(_,f[e],s?I:h[n],u||""),children:[r&&c(r,{className:y("c-mr-2",e==="xs"?"c-text-sm":"",e==="sm"?"c-text-lg":"",e==="md"?"c-text-lg":"",e==="lg"?"c-text-xl":"",e==="xl"?"c-text-2xl":"")}),t,o&&c(o,{className:y("c-ml-2",e==="xs"?"c-text-sm":"",e==="sm"?"c-text-lg":"",e==="md"?"c-text-lg":"",e==="lg"?"c-text-xl":"",e==="xl"?"c-text-2xl":"")})]}),"Button"),v=g;try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},btnStyle:{defaultValue:{value:"primary"},description:"",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},LeadingIcon:{defaultValue:null,description:"",name:"LeadingIcon",required:!1,type:{name:"ComponentType<IconProps>"}},TrailingIcon:{defaultValue:null,description:"",name:"TrailingIcon",required:!1,type:{name:"ComponentType<IconProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:g.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}var B={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=p.createContext&&p.createContext(B),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i.apply(this,arguments)},C=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};function S(t){return t&&t.map(function(e,n){return p.createElement(e.tag,i({key:n},e.attr),S(e.child))})}a(S,"Tree2Element");function O(t){return function(e){return c(w,{...i({attr:i({},t.attr)},e),children:S(t.child)})}}a(O,"GenIcon");function w(t){var e=a(function(n){var r=t.attr,o=t.size,s=t.title,u=C(t,["attr","size","title"]),m=o||n.size||"1em",d;return n.className&&(d=n.className),t.className&&(d=(d?d+" ":"")+t.className),b("svg",{...i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:d,style:i(i({color:t.color||n.color},n.style),t.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&c("title",{children:s}),t.children]})},"elem");return x!==void 0?c(x.Consumer,{children:function(n){return e(n)}}):e(B)}a(w,"IconBase");function L(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18.5 11c.17 0 .34.01.5.03V6.87C19 5.84 18.16 5 17.13 5H3.87C2.84 5 2 5.84 2 6.87v10.26C2 18.16 2.84 19 3.87 19h9.73c-.38-.75-.6-1.6-.6-2.5 0-3.04 2.46-5.5 5.5-5.5zm-8.1 2L4 9.19V7h.23l6.18 3.68L16.74 7H17v2.16L10.4 13z"}},{tag:"path",attr:{d:"M19 13l-1.41 1.41L19.17 16H15v2h4.17l-1.58 1.59L19 21l4-4z"}}]})(t)}a(L,"MdOutgoingMail");const q={parameters:{storySource:{source:`import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";
import { MdOutgoingMail } from 'react-icons/md';

export default {
  component: Button,
  title: 'Cascade/Buttons',
  argTypes: { onClick: { action: 'clicked' }}
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
}

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const White = Template.bind({});
export const Disabled = Template.bind({});
export const ExtraClasses = Template.bind({});
export const WithLeadingIcon = Template.bind({});
export const WithTrailingIcon = Template.bind({});

Primary.args = {
  btnStyle: "primary",
  title: "Primary"
};

Secondary.args = {
  btnStyle: "secondary",
  title: "Secondary"
};

White.args = {
  btnStyle: "white",
  title: "White"
};

Disabled.args = {
  btnStyle: "primary",
  title: "Disabled",
  disabled: true,
}

WithLeadingIcon.args = {
  btnStyle: "primary",
  title: "Leading Icon",
  LeadingIcon: MdOutgoingMail
}

WithTrailingIcon.args = {
  btnStyle: "primary",
  title: "Trailing Icon",
  TrailingIcon: MdOutgoingMail
}

ExtraClasses.args = {
  btnStyle: "primary",
  title: "Extra Class",
  className: "margin-top",
}`,locationsMap:{primary:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},secondary:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},white:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},disabled:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"extra-classes":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-leading-icon":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-trailing-icon":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}}}}},component:v,title:"Cascade/Buttons",argTypes:{onClick:{action:"clicked"}}},l=a(t=>c(v,{...t}),"Template"),E=l.bind({}),P=l.bind({}),W=l.bind({}),M=l.bind({}),N=l.bind({}),j=l.bind({}),k=l.bind({});E.args={btnStyle:"primary",title:"Primary"};P.args={btnStyle:"secondary",title:"Secondary"};W.args={btnStyle:"white",title:"White"};M.args={btnStyle:"primary",title:"Disabled",disabled:!0};j.args={btnStyle:"primary",title:"Leading Icon",LeadingIcon:L};k.args={btnStyle:"primary",title:"Trailing Icon",TrailingIcon:L};N.args={btnStyle:"primary",title:"Extra Class",className:"margin-top"};const R=["Primary","Secondary","White","Disabled","ExtraClasses","WithLeadingIcon","WithTrailingIcon"];export{M as Disabled,N as ExtraClasses,E as Primary,P as Secondary,W as White,j as WithLeadingIcon,k as WithTrailingIcon,R as __namedExportsOrder,q as default};
//# sourceMappingURL=button.stories.75f4e35a.js.map
