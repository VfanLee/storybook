import UHeader from '../../components/UHeader'

export default {
  title: 'Customize/UHeader',
  component: UHeader
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UHeader },
  template: `
  <u-header v-bind="$props">
    <template #description>
      <p>hello ulearning</p>
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