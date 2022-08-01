export default {
  title: 'Element/Checkbox',
  argTypes: {
    value: {
      control: 'text',
      description: '绑定值'
    },
    label: {
      control: 'text',
      description: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）'
    },
    'true-label': {
      control: 'text',
      description: '选中时的值'
    },
    'false-label': {
      control: 'text',
      description: '没有选中时的值'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否禁用'
    },
    border: {
      control: 'boolean',
      defaultValue: false,
      description: '是否显示边框'
    },
    size: {
      control: 'radio',
      options: ['medium', 'small', 'mini'],
      description: 'Checkbox 的尺寸，仅在 border 为真时有效'
    },
    name: {
      control: 'text',
      description: '原生 name 属性'
    },
    checked: {
      control: 'boolean',
      defaultValue: false,
      description: '当前是否勾选'
    },
    indeterminate: {
      control: 'boolean',
      defaultValue: false,
      description: '设置 indeterminate 状态，只负责样式控制'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes)
})

export const Attributes = Template.bind({})

export const 基础用法 = (args, { argTypes }) => ({
  template: `<el-checkbox v-model="checked">备选项</el-checkbox>`,
  data() {
    return {
      checked: true
    }
  }
})

export const 禁用状态 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
  </div>
  `,
  data() {
    return {
      checked1: false,
      checked2: true
    }
  }
})

export const 多选框组 = (args, { argTypes }) => ({
  template: `
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
  `,
  data() {
    return {
      checkList: ['选中且禁用', '复选框 A']
    }
  }
})

export const indeterminate状态 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
  `,
  data() {
    const cityOptions = ['上海', '北京', '广州', '深圳']
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
})

export const 可选项目数量的限制 = (args, { argTypes }) => ({
  template: `
  <el-checkbox-group 
    v-model="checkedCities"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
  `,
  data() {
    const cityOptions = ['上海', '北京', '广州', '深圳']
    return {
      checkedCities: ['上海', '北京'],
      cities: cityOptions
    }
  }
})

export const 按钮样式 = (args, { argTypes }) => ({
  template: `
  <div>
    <div>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>`,
  data() {
    const cityOptions = ['上海', '北京', '广州', '深圳']
    return {
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      cities: cityOptions
    }
  }
})

export const 带有边框 = (args, { argTypes }) => ({
  template: `
  <div>
    <div>
      <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox v-model="checked3" label="备选项1" border size="medium"></el-checkbox>
      <el-checkbox v-model="checked4" label="备选项2" border size="medium"></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  `,
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: []
    }
  }
})
