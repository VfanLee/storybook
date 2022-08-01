export default {
  title: 'Element/Radio',
  argTypes: {
    value: {
      control: { type: 'text' },
      description: '绑定值'
    },
    label: {
      control: { type: 'text' },
      description: 'Radio 的 value'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '是否禁用'
    },
    border: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '是否显示边框'
    },
    size: {
      control: { type: 'radio' },
      options: ['medium', 'small', 'mini'],
      description: '类型'
    },
    name: {
      description: '原生 name 属性'
    }
  }
}

const Template = (args, { argTypes }) => ({})

export const Attributes = Template.bind({})

export const 基础用法 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
  `,
  data() {
    return {
      radio: '1'
    }
  }
})

export const 禁用状态 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
    <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
  </div>
  `,
  data() {
    return {
      radio: '选中且禁用'
    }
  }
})

export const 单选框组 = (args, { argTypes }) => ({
  template: `
  <el-radio-group v-model="radio">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
  `,
  data() {
    return {
      radio: 3
    }
  }
})

export const 按钮样式 = (args, { argTypes }) => ({
  template: `
  <div>
    <div>
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio2" size="medium">
        <el-radio-button label="上海" ></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled ></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
  `,
  data() {
    return {
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海'
    }
  }
})

export const 带有边框 = (args, { argTypes }) => ({
  template: `
  <div>
    <div>
      <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
      <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
      <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3" size="small">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border disabled>备选项2</el-radio>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" size="mini" disabled>
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
      </el-radio-group>
    </div>
  </div>
  `,
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1'
    }
  }
})
