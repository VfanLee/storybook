module.exports = {
  stories: [
    '../src/storybook/**/*.stories.mdx',
    '../src/storybook/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    'storybook-dark-mode'
  ],
  framework: '@storybook/vue'
}
