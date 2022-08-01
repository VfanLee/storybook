export default {
  title: 'Element/Switch',
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否禁用'
    },
    width: {
      control: 'number',
      defaultValue: 40,
      description: 'switch 的宽度（像素）'
    },
    'active-icon-class': {
      control: 'text',
      description: 'switch 打开时所显示图标的类名，设置此项会忽略 active-text'
    },
    'inactive-icon-class': {
      control: 'text',
      description: 'switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text'
    },
    'active-text': {
      control: 'text',
      description: 'switch 打开时的文字描述'
    },
    'inactive-text': {
      control: 'text',
      description: 'switch 关闭时的文字描述'
    },
    'active-value': {
      control: 'boolean',
      defaultValue: true,
      description: 'switch 打开时的值'
    },
    'inactive-value': {
      control: 'boolean',
      defaultValue: false,
      description: 'switch 关闭时的值'
    },
    'active-color': {
      control: 'text',
      defaultValue: '#409EFF',
      description: 'switch 打开时的背景色'
    },
    'inactive-color': {
      control: 'text',
      defaultValue: '#C0CCDA',
      description: 'switch 关闭时的背景色'
    },
    name: {
      control: 'text',
      description: 'switch 对应的 name 属性'
    },
    'validate-event': {
      control: 'boolean',
      defaultValue: true,
      description: '改变 switch 状态时是否触发表单的校验'
    }
  }
}

const Template = (args, { argTypes }) => ({})

export const Attributes = Template.bind({})

export const 基础用法 = (args, { argTypes }) => ({
  template: `
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </el-switch>
  `,
  data() {
    return {
      value: true
    }
  }
})

export const 文字描述 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-switch
      v-model="value1"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
  </div>
  `,
  data() {
    return {
      value1: true,
      value2: true
    }
  }
})

export const 扩展的value类型 = (args, { argTypes }) => ({
  template: `
  <el-tooltip :content="'Switch value: ' + value" placement="top">
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="100"
      inactive-value="0">
    </el-switch>
  </el-tooltip>
  `,
  data() {
    return {
      value: '100'
    }
  }
})

export const 禁用状态 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-switch
      v-model="value1"
      disabled>
    </el-switch>
    <el-switch
      v-model="value2"
      disabled>
    </el-switch>
  </div>
  `,
  data() {
    return {
      value1: true,
      value2: false
    }
  }
})
