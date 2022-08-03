import UserSelect from '../../components/UserSelect'

export default {
  title: 'Customize/UserSelect',
  component: UserSelect,
  argTypes: {
    adminDTO: {
      control: 'object',
      description: '用户信息'
    },
    'handle-select-user': {
      description: '选中用户事件'
    }
  }
}

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserSelect },
  template: `<user-select v-bind="$props"></user-select>`
})
Template.args = {
  adminDTO: {
    userId: '001',
    headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
    name: '张三',
    email: 'zhangsan@ulearning.com'
  }
}
