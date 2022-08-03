import UHeader from '../../components/UHeader'

export default {
  title: 'Customize/UHeader',
  component: UHeader,
  argTypes: {
    title: {
      control: 'text',
      description: '标题'
    },
    description: {
      description: '描述插槽'
    },
    actions: {
      description: '操作插槽'
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

export const Template = (args, { argTypes }) => ({
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
Template.args = {
  title: 'Ulearning'
}
