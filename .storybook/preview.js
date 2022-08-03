import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

const theme = {
  brandTitle: 'Ulearning UI',
  brandUrl: 'https://double-fan.github.io/storybook-vue2/?path=/story/introduction--page',
  brandImage: 'https://www.ulearning.app/ulearning/module/asia/img/logo.png?ver=1'
}

export const parameters = {
  actions: { argTypesRegex: '^[a-z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'light',
    stylePreview: true,
    darkClass: 'gl-dark',
    dark: {
      ...theme
    },
    light: {
      ...theme
    }
  },
  options: {
    storySort: {
      order: ['Customize', 'Element']
    }
  }
}
