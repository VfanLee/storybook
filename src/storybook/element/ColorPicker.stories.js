export default {
  title: 'Element/ColorPicker',
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
    size: {
      control: 'radio',
      options: ['medium', 'small', 'mini'],
      description: '尺寸'
    },
    'show-alpha': {
      control: 'boolean',
      defaultValue: false,
      description: '是否支持透明度选择'
    },
    'color-format': {
      control: 'select',
      options: ['hsl', 'hsv', 'hex', 'rgb'],
      description: '写入 v-model 的颜色的格式'
    },
    'popper-class': {
      control: 'text',
      description: 'ColorPicker 下拉框的类名'
    },
    predefine: {
      control: 'object',
      description: '预定义颜色'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '用于颜色选择，支持多种格式。'
      }
    }
  }
}

export const Attributes = () => ({})

export const 基础用法 = () => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="block">
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>
  </div>
  `,
  data() {
    return {
      color1: '#409EFF',
      color2: null
    }
  }
})

export const 选择透明度 = () => ({
  template: `<el-color-picker v-model="color" show-alpha></el-color-picker>`,
  data() {
    return {
      color: 'rgba(19, 206, 102, 0.8)'
    }
  }
})

export const 预定义颜色 = () => ({
  template: `
  <el-color-picker
    v-model="color"
    show-alpha
    :predefine="predefineColors">
  </el-color-picker>
  `,
  data() {
    return {
      color: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }
  }
})

export const 不同尺寸 = () => ({
  template: `
  <div>
    <el-color-picker v-model="color"></el-color-picker>
    <el-color-picker v-model="color" size="medium"></el-color-picker>
    <el-color-picker v-model="color" size="small"></el-color-picker>
    <el-color-picker v-model="color" size="mini"></el-color-picker>
  </div>
  `,
  data() {
    return {
      color: '#409EFF'
    }
  }
})
