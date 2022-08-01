export default {
  title: 'Element/DateTimePicker',
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
      description: '范围选择时结束日期的占位内容'
    },
    'time-arrow-control': {
      control: 'boolean',
      defaultValue: false,
      description: '是否使用箭头进行时间选择'
    },
    type: {
      control: 'select',
      options: ['year', 'month', 'date', 'week', 'datetime', 'datetimerange', 'daterange'],
      defaultValue: 'date',
      description: '显示类型'
    },
    format: {
      control: 'string',
      default: 'yyyy-MM-dd HH:mm:ss',
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
      description: 'DateTimePicker 下拉框的类名'
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
      description: '选中日期后的默认具体时刻'
    },
    'value-format': {
      control: 'text',
      description: '可选，绑定值的格式。不指定则绑定值为 Date 对象'
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
    }
  }
}

const Template = (args, { argTypes }) => ({})

export const Attributes = Template.bind({})

export const 日期和时间点 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00">
      </el-date-picker>
    </div>
  </div>
  `,
  data() {
    return {
      pickerOptions: {
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
      value2: '',
      value3: ''
    }
  }
})

export const 基础用法 = (args, { argTypes }) => ({
  template: `
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
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
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
    }
  }
})

export const 默认的起始与结束时刻 = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00</span>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        align="right"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00', '08:00:00']">
      </el-date-picker>
    </div>
  </div>
  `,
  data() {
    return {
      value1: '',
      value2: ''
    }
  }
})
