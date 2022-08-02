export default {
  title: 'Element/InputNumber',
  argTypes: {
    value: {
      control: 'number',
      defaultValue: 0,
      description: '绑定值'
    },
    min: {
      control: 'number',
      defaultValue: -Infinity,
      description: '设置计数器允许的最小值'
    },
    max: {
      control: 'number',
      defaultValue: Infinity,
      description: '设置计数器允许的最大值'
    },
    step: {
      control: 'number',
      defaultValue: 1,
      description: '计数器步长'
    },
    'step-strictly': {
      control: 'boolean',
      defaultValue: false,
      description: '是否只能输入 step 的倍数'
    },
    precision: {
      control: 'number',
      description: '数值精度'
    },
    size: {
      control: 'radio',
      options: ['large', 'small'],
      description: '计数器尺寸'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否禁用计数器'
    },
    controls: {
      control: 'boolean',
      defaultValue: true,
      description: '是否使用控制按钮'
    },
    'controls-position': {
      control: 'radio',
      defaultValue: 'right',
      description: '控制按钮位置'
    },
    name: {
      control: 'text',
      description: '原生属性'
    },
    label: {
      control: 'text',
      description: '输入框关联的label文字'
    },
    placeholder: {
      control: 'text',
      description: '输入框默认 placeholder'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '仅允许输入标准的数字值，可定义范围'
      }
    }
  }
}

export const Attributes = () => ({})

export const 基础用法 = () => ({
  template: `<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>`,
  data() {
    return {
      num: 1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
})

export const 禁用状态 = () => ({
  template: `<el-input-number v-model="num" :disabled="true"></el-input-number>`,
  data() {
    return {
      num: 1
    }
  }
})

export const 步数 = () => ({
  template: `<el-input-number v-model="num" :step="2"></el-input-number>`,
  data() {
    return {
      num: 5
    }
  }
})

export const 严格步数 = () => ({
  template: `<el-input-number v-model="num" :step="2" step-strictly></el-input-number>`,
  data() {
    return {
      num: 1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
})

export const 精度 = () => ({
  template: `<el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>`,
  data() {
    return {
      num: 1
    }
  }
})

export const 尺寸 = () => ({
  template: `
  <div>
    <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
  </div>
  `,
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1
    }
  }
})

export const 按钮位置 = () => ({
  template: `
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
  `,
  data() {
    return {
      num: 1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
})
