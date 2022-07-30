import UHeader from '../../components/UHeader'

export default {
  title: 'Customize/UHeader',
  component: UHeader,
  argTypes: {
    title: { description: '标题' },
    description: { description: '描述信息' },
    actions: { description: '操作区域' }
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

export const Attitudes = Template.bind({})
Attitudes.args = {
  title: 'Ulearning'
}
