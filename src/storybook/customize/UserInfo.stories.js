import UserInfo from '../../components/UserInfo'

export default {
  title: 'Customize/UserInfo',
  component: UserInfo
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserInfo },
  template: '<user-info v-bind="$props" />'
})

export const 基础用法 = Template.bind({})
基础用法.args = {
  imgUrl: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
  name: 'liyuanfan',
  email: 'liyuanfan@ulearning.com'
}
