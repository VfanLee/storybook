export default {
  title: '',
  argTypes: {
    value: {
      control: 'number',
      defaultValue: 0,
      description: '绑定值'
    },
    max: {
      control: 'number',
      defaultValue: 5,
      description: '最大分值'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否为只读'
    },
    'allow-half': {
      control: 'boolean',
      defaultValue: false,
      description: '是否允许半选'
    },
    'low-threshold': {
      control: 'number',
      defaultValue: 2,
      description: '低分和中等分数的界限值，值本身被划分在低分中'
    },
    'high-threshold': {
      control: 'number',
      defaultValue: 4,
      description: '高分和中等分数的界限值，值本身被划分在高分中'
    },
    colors: {
      control: 'object',
      defaultValue: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
      description: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色'
    },
    'void-color': {
      control: 'text',
      defaultValue: '#C6D1DE',
      description: '未选中 icon 的颜色'
    },
    'disabled-void-color': {
      control: 'text',
      defaultValue: '#C6D1DE',
      description: '只读时未选中 icon 的颜色'
    },
    'icon-classes': {
      control: 'object',
      defaultValue: ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
      description: 'icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名'
    },
    'void-icon-class': {
      control: 'text',
      defaultValue: 'el-icon-star-off',
      description: '未选中 icon 的类名'
    },
    'disabled-void-icon-class': {
      control: 'text',
      defaultValue: 'el-icon-star-on',
      description: '只读时未选中 icon 的类名'
    },
    'show-text': {
      control: 'boolean',
      defaultValue: false,
      description: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容'
    },
    'show-score': {
      control: 'boolean',
      defaultValue: false,
      description: '是否显示当前分数，show-score 和 show-text 不能同时为真'
    },
    'text-color': {
      control: 'text',
      defaultValue: '#1F2D3D',
      description: '辅助文字的颜色'
    },
    texts: {
      control: 'object',
      defaultValue: ['极差', '失望', '一般', '满意', '惊喜'],
      description: '辅助文字数组'
    },
    'score-template': {
      control: 'text',
      description: '分数显示模板'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '评分组件'
      }
    }
  }
}

export const Attitudes = () => ({})

export const 基础用法 = () => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="colors">
      </el-rate>
    </div>
  </div>
  `,
  data() {
    return {
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  }
})

export const 辅助文字 = () => ({
  template: `
  <el-rate
    v-model="value"
    show-text>
  </el-rate>
  `,
  data() {
    return {
      value: null
    }
  }
})
辅助文字.parameters = {
  docs: {
    description: {
      story: '用辅助文字直接地表达对应分数'
    }
  }
}

export const 其它icon = () => ({
  template: `
  <el-rate
    v-model="value"
    :icon-classes="iconClasses"
    void-icon-class="icon-rate-face-off"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
  `,
  data() {
    return {
      value: null,
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    }
  }
})
其它icon.parameters = {
  docs: {
    description: {
      story: '当有多层评价时，可以用不同类型的 icon 区分评分层级'
    }
  }
}

export const 只读 = () => ({
  template: `
  <el-rate
    v-model="value"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value}">
  </el-rate>
  `,
  data() {
    return {
      value: 3.7
    }
  }
})
只读.parameters = {
  docs: {
    description: {
      story: '只读的评分用来展示分数，允许出现半星'
    }
  }
}
