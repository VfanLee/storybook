export default {
  title: 'Element/Select',
  argTypes: {
    value: {
      control: 'string',
      description: '绑定值'
    },
    multiple: {
      control: 'boolean',
      defaultValue: false,
      description: '是否多选'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否禁用'
    },
    'value-key': {
      control: 'string',
      defaultValue: 'value',
      description: '作为 value 唯一标识的键名，绑定值为对象类型时必填'
    },
    size: {
      control: 'radio',
      options: ['medium', 'small', 'mini'],
      description: '输入框尺寸'
    },
    clearable: {
      control: 'boolean',
      defaultValue: false,
      description: '是否可以清空选项'
    },
    'collapse-tags': {
      control: 'boolean',
      defaultValue: false,
      description: '多选时是否将选中值按文字的形式展示'
    },
    'multiple-limit': {
      control: 'number',
      defaultValue: 0,
      description: '多选时用户最多可以选择的项目数，为 0 则不限制'
    },
    name: {
      control: 'string',
      description: 'select input 的 name 属性'
    },
    autocomplete: {
      control: 'string',
      default: 'off',
      description: 'select input 的 autocomplete 属性'
    },
    'auto-complete': {
      control: 'string',
      default: 'off',
      description: '下个主版本弃用'
    },
    placeholder: {
      control: 'string',
      defaultValue: '请选择',
      description: '占位符'
    },
    filterable: {
      control: 'boolean',
      defaultValue: false,
      description: '是否可搜索'
    },
    'allow-create': {
      control: 'boolean',
      defaultValue: false,
      description: '是否允许用户创建新条目，需配合 filterable 使用'
    },
    'filter-method': {
      control: 'object',
      description: '自定义搜索方法'
    },
    remote: {
      control: 'boolean',
      defaultValue: false,
      description: '是否为远程搜索'
    },
    'remote-method': {
      control: 'object',
      description: '远程搜索方法'
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      description: '是否正在从远程获取数据'
    },
    'loading-text': {
      control: 'string',
      default: '加载中',
      description: '远程加载时显示的文字'
    },
    'no-match-text': {
      control: 'string',
      default: '无匹配数据',
      description: '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置'
    },
    'no-data-text': {
      control: 'string',
      default: '无数据',
      description: '绑定值'
    },
    'popper-class': {
      control: 'string',
      description: 'Select 下拉框的类名'
    },
    'reserve-keyword': {
      control: 'boolean',
      defaultValue: false,
      description: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词'
    },
    'default-first-option': {
      control: 'boolean',
      defaultValue: false,
      description: '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用'
    },
    'popper-append-to-body': {
      control: 'boolean',
      defaultValue: true,
      description: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false'
    },
    'automatic-dropdown': {
      control: 'boolean',
      defaultValue: false,
      description: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '当选项过多时，使用下拉菜单展示并选择内容。'
      }
    }
  }
}

export const Attitudes = () => ({})

export const 基础用法 = () => ({
  template: `
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  `,
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
})
基础用法.parameters = {
  docs: {
    description: {
      story: '适用广泛的基础单选'
    }
  }
}

export const 有禁用选项 = () => ({
  template: `
  <el-select v-model="value" placeholder="请选择">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled">
  </el-option>
</el-select>
  `,
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
})

export const 禁用状态 = () => ({
  template: `
  <el-select v-model="value" disabled placeholder="请选择">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>
  `,
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
})
禁用状态.parameters = {
  docs: {
    description: {
      story: '选择器不可用状态'
    }
  }
}

export const 可清空单选 = () => ({
  template: `
  <el-select v-model="value" clearable placeholder="请选择">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>
  `,
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
})
可清空单选.parameters = {
  docs: {
    description: {
      story: '包含清空按钮，可将选择器清空为初始状态'
    }
  }
}

export const 基础多选 = () => ({
  template: `
  <div>
  <el-select v-model="value1" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  `,
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value1: [],
      value2: []
    }
  }
})
基础多选.parameters = {
  docs: {
    description: {
      story: '适用性较广的基础多选，用 Tag 展示已选项'
    }
  }
}

export const 自定义模板 = () => ({
  template: `
  <el-select v-model="value" placeholder="请选择">
  <el-option
    v-for="item in cities"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
  </el-option>
</el-select>
  `,
  data() {
    return {
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        },
        {
          value: 'Shanghai',
          label: '上海'
        },
        {
          value: 'Nanjing',
          label: '南京'
        },
        {
          value: 'Chengdu',
          label: '成都'
        },
        {
          value: 'Shenzhen',
          label: '深圳'
        },
        {
          value: 'Guangzhou',
          label: '广州'
        }
      ],
      value: ''
    }
  }
})
自定义模板.parameters = {
  docs: {
    description: {
      story: '可以自定义备选项'
    }
  }
}

export const 分组 = () => ({
  template: `
  <el-select v-model="value" placeholder="请选择">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
  `,
  data() {
    return {
      options: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海'
            },
            {
              value: 'Beijing',
              label: '北京'
            }
          ]
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都'
            },
            {
              value: 'Shenzhen',
              label: '深圳'
            },
            {
              value: 'Guangzhou',
              label: '广州'
            },
            {
              value: 'Dalian',
              label: '大连'
            }
          ]
        }
      ],
      value: ''
    }
  }
})
分组.parameters = {
  docs: {
    description: {
      story: '备选项进行分组展示'
    }
  }
}

export const 可搜索 = () => ({
  template: `
  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  `,
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
})
可搜索.parameters = {
  docs: {
    description: {
      story: '可以利用搜索功能快速查找选项'
    }
  }
}

export const 远程搜索 = () => ({
  template: `
  <el-select
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  `,
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
})
远程搜索.parameters = {
  docs: {
    description: {
      story: '从服务器搜索数据，输入关键字进行查找'
    }
  }
}

export const 创建条目 = () => ({
  template: `
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  `,
  data() {
    return {
      options: [
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ],
      value: []
    }
  }
})
创建条目.parameters = {
  docs: {
    description: {
      story: '可以创建并选中选项中不存在的条目'
    }
  }
}
