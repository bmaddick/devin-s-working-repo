const path = require('path');
const fs = require('fs');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    ...fs.readdirSync(path.resolve(__dirname, '..', 'src', 'i18n')).some((f) => f.endsWith('.po')) ? [{
      name: '@indeed/storybook-addon-translations',
      options: {
        poPath: path.resolve(__dirname, '../src/i18n'),
      },
    }] : [],
    "@indeed/storybook-one-host-preset",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  }
}