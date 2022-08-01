export default {
  title: 'Element/DatePicker',
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值'
    },
    readonly: {
      control: 'boolean',
      defaultValue: false,
      description: '完全只读'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '禁用'
    },
    editable: {
      control: 'boolean',
      defaultValue: true,
      description: '文本框可输入'
    },
    clearable: {
      control: 'boolean',
      defaultValue: true,
      description: '是否显示清除按钮'
    },
    size: {
      control: 'radio',
      options: ['medium', 'small', 'mini'],
      description: '输入框尺寸'
    },
    placeholder: {
      control: 'text',
      description: '非范围选择时的占位内容'
    },
    'start-placeholder': {
      control: 'text',
      description: '范围选择时开始日期的占位内容'
    },
    'end-placeholder': {
      control: 'text',
      description: '范围选择时开始日期的占位内容'
    },
    type: {
      control: 'select',
      options: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
      defaultValue: 'date',
      description: '显示类型'
    },
    format: {
      control: 'string',
      default: 'yyyy-MM-dd',
      description: '显示在输入框中的格式'
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
      description: '对齐方式'
    },
    'popper-class': {
      control: 'text',
      description: 'DatePicker 下拉框的类名'
    },
    'picker-options': {
      control: 'object',
      description: '当前时间日期选择器特有的选项'
    },
    'range-separator': {
      control: 'text',
      defaultValue: '-',
      description: '选择范围时的分隔符'
    },
    'default-value': {
      control: 'text',
      description: '可选，选择器打开时默认显示的时间'
    },
    'default-time': {
      control: 'object',
      description: '范围选择时选中日期所使用的当日内具体时刻'
    },
    'value-format': {
      control: 'text',
      description: '可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象'
    },
    name: {
      control: 'text',
      description: '原生属性'
    },
    'unlink-panels': {
      control: 'boolean',
      defaultValue: false,
      description: '在范围选择器里取消两个日期面板之间的联动'
    },
    'prefix-icon': {
      control: 'text',
      defaultValue: 'el-icon-date',
      description: '自定义头部图标的类名'
    },
    'clear-icon': {
      control: 'text',
      defaultValue: 'el-icon-circle-close',
      description: '自定义清空图标的类名'
    },
    'validate-event': {
      control: 'boolean',
      defaultValue: true,
      description: '输入时是否触发表单的校验'
    }
  }
}

const Template = (args, { argTypes }) => ({})

export const Attributes = Template.bind({})

export const 选择日 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
  </div>
  `,
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      value1: '',
      value2: ''
    }
  }
})

export const 其他日期单位 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker
          v-model="value3"
          type="year"
          placeholder="选择年">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <el-date-picker
          type="dates"
          v-model="value4"
          placeholder="选择一个或多个日期">
        </el-date-picker>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
})

export const 选择日期范围 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
  </div>
  `,
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: '',
      value2: ''
    }
  }
})

export const 选择月份范围 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="monthrange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
  </div>
  `,
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()])
            }
          },
          {
            text: '今年至今',
            onClick(picker) {
              const end = new Date()
              const start = new Date(new Date().getFullYear(), 0)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 6)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: '',
      value2: ''
    }
  }
})

export const 日期格式 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">值：{{ value1 }}</div>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">使用 value-format</span>
      <div class="demonstration">值：{{ value2 }}</div>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">时间戳</span>
      <div class="demonstration">值：{{ value3 }}</div>
      <el-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="timestamp">
      </el-date-picker>
    </div>
  </div>
  `,
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
})

export const 默认显示日期 = (args, { argTypes }) => ({
  template: `
  <div class="block">
    <p>组件值：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
  `,
  data() {
    return {
      value: ''
    }
  }
})
