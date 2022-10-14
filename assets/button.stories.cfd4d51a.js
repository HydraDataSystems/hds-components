var m=Object.defineProperty;var t=(e,r)=>m(e,"name",{value:r,configurable:!0});import{j as a}from"./jsx-runtime.d6343d5d.js";import"./iframe.bb5d8de3.js";function p(...e){return e.filter(Boolean).join(" ")}t(p,"classNames");var i=(e=>(e.xs="c-px-2.5 c-py-1.5 c-text-xs c-font-medium",e.sm="c-px-3 c-py-2 c-text-sm c-font-medium",e.md="c-px-4 c-py-2 c-text-sm c-font-medium",e.lg="c-px-4 c-py-2 c-text-base c-font-medium",e.xl="c-px-6 c-py-3 c-text-base c-font-medium",e))(i||{}),l=(e=>(e.primary="c-border-transparent c-bg-indigo-600 c-text-white hover:c-bg-indigo-700 ",e.secondary="c-border-transparent c-bg-indigo-100 c-text-indigo-700 hover:c-bg-indigo-200",e.white="c-border-gray-300 c-bg-white c-text-gray-700 hover:c-bg-gray-50",e))(l||{});const y="c-inline-flex c-items-center c-rounded c-border c-shadow-sm focus:c-outline-none focus:c-ring-2 focus:c-ring-indigo-500 focus:c-ring-offset-2",b="c-border-transparent c-bg-gray-100 c-cursor-not-allowed c-text-gray-300",n=t(({title:e,size:r="md",btnStyle:d="primary",disabled:c,...u})=>a("button",{...u,disabled:c,className:p(y,i[r],c?b:l[d]),children:e}),"Button"),s=n;try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},btnStyle:{defaultValue:{value:"primary"},description:"",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}const v={parameters:{storySource:{source:`import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";

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
}`,locationsMap:{primary:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},secondary:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},white:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}},disabled:{startLoc:{col:37,line:10},endLoc:{col:1,line:14},startBody:{col:37,line:10},endBody:{col:1,line:14}}}}},component:s,title:"Cascade/Buttons",argTypes:{onClick:{action:"clicked"}}},o=t(e=>a(s,{...e}),"Template"),g=o.bind({}),f=o.bind({}),x=o.bind({}),B=o.bind({});g.args={btnStyle:"primary",title:"Primary"};f.args={btnStyle:"secondary",title:"Secondary"};x.args={btnStyle:"white",title:"White"};B.args={btnStyle:"primary",title:"Disabled",disabled:!0};const L=["Primary","Secondary","White","Disabled"];export{B as Disabled,g as Primary,f as Secondary,x as White,L as __namedExportsOrder,v as default};
//# sourceMappingURL=button.stories.cfd4d51a.js.map
