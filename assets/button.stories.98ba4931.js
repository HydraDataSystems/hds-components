var w=Object.defineProperty;var a=(n,t)=>w(n,"name",{value:t,configurable:!0});import{R as b,j as p,a as S,r as M}from"./jsx-runtime.0329fa6f.js";import"./iframe.627f3f05.js";function h(...n){return n.filter(Boolean).join(" ")}a(h,"classNames");var L={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=b.createContext&&b.createContext(L),s=globalThis&&globalThis.__assign||function(){return s=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},s.apply(this,arguments)},E=globalThis&&globalThis.__rest||function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,e=Object.getOwnPropertySymbols(n);i<e.length;i++)t.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(r[e[i]]=n[e[i]]);return r};function v(n){return n&&n.map(function(t,r){return b.createElement(t.tag,s({key:r},t.attr),v(t.child))})}a(v,"Tree2Element");function B(n){return function(t){return p(P,{...s({attr:s({},n.attr)},t),children:v(n.child)})}}a(B,"GenIcon");function P(n){var t=a(function(r){var e=n.attr,i=n.size,l=n.title,d=E(n,["attr","size","title"]),u=i||r.size||"1em",c;return r.className&&(c=r.className),n.className&&(c=(c?c+" ":"")+n.className),S("svg",{...s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,d,{className:c,style:s(s({color:n.color||r.color},r.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),children:[l&&p("title",{children:l}),n.children]})},"elem");return x!==void 0?p(x.Consumer,{children:function(r){return t(r)}}):t(L)}a(P,"IconBase");function f(n){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"}}]})(n)}a(f,"CgSpinner");var C=(n=>(n.xs="c-px-2.5 c-py-1.5 c-text-xs c-font-medium",n.sm="c-px-3 c-py-2 c-text-sm c-font-medium",n.md="c-px-4 c-py-2 c-text-sm c-font-medium",n.lg="c-px-4 c-py-2 c-text-base c-font-medium",n.xl="c-px-6 c-py-3 c-text-base c-font-medium",n))(C||{}),T=(n=>(n.primary="c-border-transparent c-bg-indigo-600 c-text-white hover:c-bg-indigo-700 ",n.secondary="c-border-transparent c-bg-indigo-100 c-text-indigo-700 hover:c-bg-indigo-200",n.white="c-border-gray-300 c-bg-white c-text-gray-700 hover:c-bg-gray-50",n))(T||{});const N="c-inline-flex c-items-center c-rounded c-border c-shadow-sm focus:c-outline-none focus:c-ring-2 focus:c-ring-indigo-500 focus:c-ring-offset-2",k="c-border-transparent c-bg-gray-100 c-cursor-not-allowed c-text-gray-300",V="c-border-transparent c-bg-gray-300 c-cursor-not-allowed c-text-gray-600",m=a(({title:n,size:t="md",btnStyle:r="primary",busy:e=!1,busyText:i="Loading...",LeadingIcon:l,TrailingIcon:d,disabled:u,className:c,...W})=>{const g=M.exports.useCallback((I,O)=>p(O,{className:h(I?"c-mr-2":"c-ml-2",t==="xs"?"c-text-sm":"",t==="sm"?"c-text-lg":"",t==="md"?"c-text-lg":"",t==="lg"?"c-text-xl":"",t==="xl"?"c-text-2xl":"",e?"c-animate-spin":"")}),[e,l,d]);return S("button",{...W,disabled:u?!0:!!e,className:h(N,C[t],u?k:e?V:T[r],c||""),children:[e&&!l&&!d&&g(!0,f),l&&!e&&g(!0,l),l&&e&&g(!0,f),e?i:n,d&&!e&&g(!1,d),d&&e&&g(!1,f)]})},"Button"),_=m;try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},busy:{defaultValue:{value:"false"},description:"",name:"busy",required:!1,type:{name:"boolean"}},busyText:{defaultValue:{value:"Loading..."},description:"",name:"busyText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},btnStyle:{defaultValue:{value:"primary"},description:"",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},LeadingIcon:{defaultValue:null,description:"",name:"LeadingIcon",required:!1,type:{name:"ComponentType<IconProps>"}},TrailingIcon:{defaultValue:null,description:"",name:"TrailingIcon",required:!1,type:{name:"ComponentType<IconProps>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}function y(n){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18.5 11c.17 0 .34.01.5.03V6.87C19 5.84 18.16 5 17.13 5H3.87C2.84 5 2 5.84 2 6.87v10.26C2 18.16 2.84 19 3.87 19h9.73c-.38-.75-.6-1.6-.6-2.5 0-3.04 2.46-5.5 5.5-5.5zm-8.1 2L4 9.19V7h.23l6.18 3.68L16.74 7H17v2.16L10.4 13z"}},{tag:"path",attr:{d:"M19 13l-1.41 1.41L19.17 16H15v2h4.17l-1.58 1.59L19 21l4-4z"}}]})(n)}a(y,"MdOutgoingMail");const F={parameters:{storySource:{source:`import { Meta, Story } from "@storybook/react";
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
export const WithLeadingSpinner = Template.bind({});
export const WithTrailingSpinner = Template.bind({});
export const WithLoadingSpinner = Template.bind({});

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
}

WithLeadingSpinner.args = {
  title: "Leading Spinner",
  busy: true,
  LeadingIcon: MdOutgoingMail
}

WithTrailingSpinner.args = {
  title: "Trailing Spinner",
  busy: true,
  TrailingIcon: MdOutgoingMail
}

WithLoadingSpinner.args = {
  title: "With Loading Only",
  busy: true
}`,locationsMap:{primary:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},secondary:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},white:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},disabled:{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"extra-classes":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-leading-icon":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-trailing-icon":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-leading-spinner":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-trailing-spinner":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}},"with-loading-spinner":{startLoc:{col:37,line:11},endLoc:{col:1,line:15},startBody:{col:37,line:11},endBody:{col:1,line:15}}}}},component:_,title:"Cascade/Buttons",argTypes:{onClick:{action:"clicked"}}},o=a(n=>p(_,{...n}),"Template"),j=o.bind({}),A=o.bind({}),D=o.bind({}),q=o.bind({}),R=o.bind({}),H=o.bind({}),z=o.bind({}),Y=o.bind({}),Z=o.bind({}),K=o.bind({});j.args={btnStyle:"primary",title:"Primary"};A.args={btnStyle:"secondary",title:"Secondary"};D.args={btnStyle:"white",title:"White"};q.args={btnStyle:"primary",title:"Disabled",disabled:!0};H.args={btnStyle:"primary",title:"Leading Icon",LeadingIcon:y};z.args={btnStyle:"primary",title:"Trailing Icon",TrailingIcon:y};R.args={btnStyle:"primary",title:"Extra Class",className:"margin-top"};Y.args={title:"Leading Spinner",busy:!0,LeadingIcon:y};Z.args={title:"Trailing Spinner",busy:!0,TrailingIcon:y};K.args={title:"With Loading Only",busy:!0};const J=["Primary","Secondary","White","Disabled","ExtraClasses","WithLeadingIcon","WithTrailingIcon","WithLeadingSpinner","WithTrailingSpinner","WithLoadingSpinner"];export{q as Disabled,R as ExtraClasses,j as Primary,A as Secondary,D as White,H as WithLeadingIcon,Y as WithLeadingSpinner,K as WithLoadingSpinner,z as WithTrailingIcon,Z as WithTrailingSpinner,J as __namedExportsOrder,F as default};
//# sourceMappingURL=button.stories.98ba4931.js.map
