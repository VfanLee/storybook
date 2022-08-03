import UserInfo from '../../components/UserInfo'

export default {
  title: 'Customize/UserInfo',
  component: UserInfo,
  argTypes: {
    imgUrl: {
      control: 'text',
      description: '头像地址'
    },
    name: {
      control: 'text',
      description: '名字'
    },
    email: {
      control: 'text',
      description: '邮箱'
    }
  }
}

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserInfo },
  template: '<user-info v-bind="$props" />'
})
Template.args = {
  imgUrl: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
  name: '张三',
  email: 'zhangsan@ulearning.com'
}
