import UserSelect from '../../components/UserSelect'

export default {
  title: 'Customize/UserSelect',
  component: UserSelect
}

export const 基础用法 = (args, { argTypes }) => ({
  components: { UserSelect },
  template: `
  <user-select
    :adminDTO="{
      userId: '001',
      headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
      name: 'liyuanfan',
      email: 'liyuanfan@ulearning.com'
    }"
  ></user-select>
  `
})
