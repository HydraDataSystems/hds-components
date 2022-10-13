var u=Object.defineProperty;var e=(t,o)=>u(t,"name",{value:o,configurable:!0});import{j as c}from"./jsx-runtime.05743db6.js";import"./iframe.b65c304a.js";function m(...t){return t.filter(Boolean).join(" ")}e(m,"classNames");var a=(t=>(t.xs="c-px-2.5 c-py-1.5 c-text-xs c-font-medium",t.sm="c-px-3 c-py-2 c-text-sm c-font-medium",t.md="c-px-4 c-py-2 c-text-sm c-font-medium",t.lg="c-px-4 c-py-2 c-text-base c-font-medium",t.xl="c-px-6 c-py-3 c-text-base c-font-medium",t))(a||{}),i=(t=>(t.primary="c-border-transparent c-bg-indigo-600 c-text-white hover:c-bg-indigo-700 ",t.secondary="c-border-transparent c-bg-indigo-100 c-text-indigo-700 hover:c-bg-indigo-200",t.white="c-border-gray-300 c-bg-white c-text-gray-700 hover:c-bg-gray-50",t))(i||{});const p="c-inline-flex c-items-center c-rounded c-border c-shadow-sm focus:c-outline-none focus:c-ring-2 focus:c-ring-indigo-500 focus:c-ring-offset-2",n=e(({title:t,size:o="md",btnStyle:l="primary",...d})=>c("button",{...d,className:m(p,a[o],i[l]),children:t}),"Button"),s=n;try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},btnStyle:{defaultValue:{value:"primary"},description:"",name:"btnStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"white"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}const S={parameters:{storySource:{source:`import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";

export default {
  component: Button,
  title: 'Cascade/Buttons'
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <Button {...args}>Button</Button>
  )
}

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const White = Template.bind({});

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
};`,locationsMap:{primary:{startLoc:{col:37,line:9},endLoc:{col:1,line:13},startBody:{col:37,line:9},endBody:{col:1,line:13}},secondary:{startLoc:{col:37,line:9},endLoc:{col:1,line:13},startBody:{col:37,line:9},endBody:{col:1,line:13}},white:{startLoc:{col:37,line:9},endLoc:{col:1,line:13},startBody:{col:37,line:9},endBody:{col:1,line:13}}}}},component:s,title:"Cascade/Buttons"},r=e(t=>c(s,{...t,children:"Button"}),"Template"),y=r.bind({}),g=r.bind({}),f=r.bind({});y.args={btnStyle:"primary",title:"Primary"};g.args={btnStyle:"secondary",title:"Secondary"};f.args={btnStyle:"white",title:"White"};const h=["Primary","Secondary","White"];export{y as Primary,g as Secondary,f as White,h as __namedExportsOrder,S as default};
//# sourceMappingURL=button.stories.8bafe209.js.map
