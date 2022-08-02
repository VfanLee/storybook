export default {
  title: 'Element/TimePicker',
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
    'is-range': {
      control: 'boolean',
      defaultValue: false,
      description: '是否为时间范围选择，仅对<el-time-picker>有效'
    },
    'arrow-control': {
      control: 'boolean',
      defaultValue: false,
      description: '是否使用箭头进行时间选择，仅对<el-time-picker>有效'
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
      description: '对齐方式'
    },
    'popper-class': {
      control: 'text',
      description: 'TimePicker 下拉框的类名'
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
    'value-format': {
      control: 'text',
      description: '可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象'
    },
    'default-value': {
      control: 'text',
      description: '可选，选择器打开时默认显示的时间'
    },
    name: {
      control: 'text',
      description: '原生属性'
    },
    'prefix-icon': {
      control: 'text',
      defaultValue: 'el-icon-time',
      description: '自定义头部图标的类名'
    },
    'clear-icon': {
      control: 'text',
      defaultValue: 'el-icon-circle-close',
      description: '自定义清空图标的类名'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '用于选择或输入日期'
      }
    }
  }
}

export const Attributes = () => ({})

export const 固定时间点 = () => ({
  template: `
  <el-time-select
    v-model="value"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间">
  </el-time-select>
  `,
  data() {
    return {
      value: ''
    }
  }
})
固定时间点.parameters = {
  docs: {
    description: {
      story: '提供几个固定的时间点供用户选择'
    }
  }
}

export const 任意时间点 = () => ({
  template: `
  <div>
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点">
    </el-time-picker>
    <el-time-picker
      arrow-control
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点">
    </el-time-picker>
  </div>
  `,
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40)
    }
  }
})
任意时间点.parameters = {
  docs: {
    description: {
      story: '可以选择任意时间'
    }
  }
}

export const 固定时间范围 = () => ({
  template: `
  <div>
    <el-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }">
    </el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
      }">
    </el-time-select>
  </div>
  `,
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  }
})
固定时间范围.parameters = {
  docs: {
    description: {
      story: '若先选择开始时间，则结束时间内备选项的状态会随之改变'
    }
  }
}

export const 任意时间范围 = () => ({
  template: `
  <div>
    <el-time-picker
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
    <el-time-picker
      is-range
      arrow-control
      v-model="value2"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
  </div>
  `,
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  }
})
任意时间范围.parameters = {
  docs: {
    description: {
      story: '可选择任意的时间范围'
    }
  }
}
