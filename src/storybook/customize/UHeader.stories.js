import UHeader from '../../components/UHeader'

export default {
  title: 'Customize/UHeader',
  component: UHeader,
  argTypes: {
    title: {
      control: 'text',
      description: '标题'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '设置头部通用栏'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UHeader },
  template: `
  <u-header v-bind="$props">
    <template #description>
      <p>hello world!</p>
    </template>
    <template #actions>
      <button>Give me five</button>
    </template>
  </u-header>
  `
})

export const 基础用法 = Template.bind({})
基础用法.args = {
  title: 'Ulearning'
}
