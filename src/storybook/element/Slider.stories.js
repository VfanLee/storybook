export default {
  title: 'Element/Slider',
  argTypes: {
    value: {
      control: 'number',
      defaultValue: 0,
      description: '绑定值'
    },
    min: {
      control: 'number',
      defaultValue: 0,
      description: '最小值'
    },
    max: {
      control: 'number',
      defaultValue: 100,
      description: '最大值'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否禁用'
    },
    step: {
      control: 'number',
      defaultValue: 1,
      description: '步长'
    },
    'show-input': {
      control: 'boolean',
      defaultValue: false,
      description: '是否显示输入框，仅在非范围选择时有效'
    },
    'show-input-controls': {
      control: 'boolean',
      defaultValue: true,
      description: '在显示输入框的情况下，是否显示输入框的控制按钮'
    },
    'input-size': {
      control: 'select',
      opitons: ['large', 'medium', 'small', 'mini'],
      defaultValue: 'small',
      description: '输入框的尺寸'
    },
    'show-stops': {
      control: 'boolean',
      defaultValue: false,
      description: '是否显示间断点'
    },
    'show-tooltip': {
      control: 'boolean',
      defaultValue: true,
      description: '是否显示 tooltip'
    },
    'format-tooltip': {
      control: 'object',
      description: '格式化 tooltip message'
    },
    range: {
      control: 'boolean',
      defaultValue: false,
      description: '是否为范围选择'
    },
    range: {
      control: 'boolean',
      defaultValue: false,
      description: '是否为范围选择'
    },
    vertical: {
      control: 'boolean',
      defaultValue: false,
      description: '是否竖向模式'
    },
    height: {
      control: 'string',
      description: 'Slider 高度，竖向模式时必填'
    },
    label: {
      control: 'string',
      description: '屏幕阅读器标签'
    },
    debounce: {
      control: 'number',
      defaultValue: 300,
      description: '输入时的去抖延迟，毫秒，仅在show-input等于true时有效'
    },
    'tooltip-class': {
      control: 'text',
      description: 'tooltip 的自定义类名'
    },
    marks: {
      control: 'object',
      description: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式'
    }
  }
}

const Template = (args, { argTypes }) => ({})

export const Attributes = Template.bind({})

export const 基本使用 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>
  </div>
  `,
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100
    }
  }
})

export const 离散值 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider
        v-model="value1"
        :step="10">
      </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider
        v-model="value2"
        :step="10"
        show-stops>
      </el-slider>
    </div>
  </div>
  `,
  data() {
    return {
      value1: 0,
      value2: 0
    }
  }
})

export const 带有输入框 = (args, { argTypes }) => ({
  template: `
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
  `,
  data() {
    return {
      value: 0
    }
  }
})

export const 范围选择 = (args, { argTypes }) => ({
  template: `
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
  `,
  data() {
    return {
      value: [4, 8]
    }
  }
})

export const 竖向模式 = (args, { argTypes }) => ({
  template: `
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
  `,
  data() {
    return {
      value: 0
    }
  }
})

export const 展示标记 = (args, { argTypes }) => ({
  template: `
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
  `,
  data() {
    return {
      value: [30, 60],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      }
    }
  }
})
