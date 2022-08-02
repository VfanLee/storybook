module.exports = {
  stories: [
    '../src/storybook/**/*.stories.mdx',
    '../src/storybook/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss', // 集成 sass
    '@storybook/addon-a11y', // 可访问性
    'storybook-dark-mode', // 明暗模式
  ],
  framework: '@storybook/vue'
}
