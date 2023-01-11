module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: async config => {
    if (process.env.GH_PAGES) {
      config.base = "https://hydradatasystems.github.io/hds-components/static-pages";
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};