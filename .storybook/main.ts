import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: '@storybook/react-vite',
  viteFinal: async config => {
    if (process.env.GH_PAGES) {
      config.base = "https://hydradatasystems.github.io/hds-components/";
    }
    return config;
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
};

export default config;

// export const stories = ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"];

// export const framework = {
//   name: "@storybook/react-vite",
//   options: {}
// };

// export const docs = {};

// export const typescript = {
//   reactDocgen: "react-docgen-typescript"
// };
// export const addons = ["@chromatic-com/storybook"];