export default {
  title: 'Element/ElLink'
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<el-link v-bind="$props">Link</el-link>'
})

export const Attributes = Template.bind({})
Attributes.args = {
  type: '',
  underline: true,
  disabled: false,
  href: '',
  icon: ''
}

export const 基础用法 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
  </div>
  `
})

export const 禁用状态 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-link disabled>默认链接</el-link>
    <el-link type="primary" disabled>主要链接</el-link>
    <el-link type="success" disabled>成功链接</el-link>
    <el-link type="warning" disabled>警告链接</el-link>
    <el-link type="danger" disabled>危险链接</el-link>
    <el-link type="info" disabled>信息链接</el-link>
  </div>
  `
})

export const 下划线 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-link :underline="false">无下划线</el-link>
    <el-link>有下划线</el-link>
  </div>
  `
})

export const 图标 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-link icon="el-icon-edit">编辑</el-link>
    <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
  </div>
  `
})