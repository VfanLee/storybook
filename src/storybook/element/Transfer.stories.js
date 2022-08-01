export default {
  title: 'Element/Transfer',
  argTypes: {
    value: {
      control: 'object',
      description: '绑定值'
    },
    data: {
      control: 'object',
      defaultValue: [],
      description: 'Transfer 的数据源'
    },
    filterable: {
      control: 'boolean',
      default: false,
      description: '是否可搜索'
    },
    'filter-placeholder': {
      control: 'text',
      defaultValue: '请输入搜索内容',
      description: '搜索框占位符'
    },
    'filter-method': {
      control: 'object',
      description: '自定义搜索方法'
    },
    'target-order': {
      control: 'radio',
      options: ['original', 'push', 'unshift'],
      description: '右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前'
    },
    titles: {
      control: 'object',
      defaultValue: ['列表 1', '列表 2'],
      description: '自定义列表标题'
    },
    'button-texts': {
      control: 'object',
      defaultValue: [],
      description: '自定义按钮文案'
    },
    'render-content': {
      control: 'object',
      description: '自定义数据项渲染函数'
    },
    format: {
      control: 'object',
      defaultValue: { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' },
      description: '列表顶部勾选状态文案'
    },
    props: {
      control: 'object',
      description: '数据源的字段别名'
    },
    'left-default-checked': {
      control: 'object',
      defaultValue: [],
      description: '初始状态下左侧列表的已勾选项的 key 数组'
    },
    'right-default-checked': {
      control: 'object',
      defaultValue: [],
      description: '初始状态下右侧列表的已勾选项的 key 数组'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: ``
})

export const Attributes = Template.bind({})

export const 基础用法 = (args, { argTypes }) => ({
  template: `<el-transfer v-model="value" :data="data"></el-transfer>`,
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [1, 4]
    }
  }
})

export const 可搜索 = (args, { argTypes }) => ({
  template: `
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value"
    :data="data">
  </el-transfer>
  `,
  data() {
    const generateData = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1
      }
    }
  }
})

// export const 可自定义 = (args, { argTypes }) => ({
//   template: `
//   <div>
//     <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
//     <div style="text-align: center">
//       <el-transfer
//         style="text-align: left; display: inline-block"
//         v-model="value"
//         filterable
//         :left-default-checked="[2, 3]"
//         :right-default-checked="[1]"
//         :render-content="renderFunc"
//         :titles="['Source', 'Target']"
//         :button-texts="['到左边', '到右边']"
//         :format="{
//           noChecked: '${total}',
//           hasChecked: '${checked}/${total}'
//         }"
//         @change="handleChange"
//         :data="data">
//         <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
//         <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
//       </el-transfer>
//     </div>
//     <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
//     <div style="text-align: center">
//       <el-transfer
//         style="text-align: left; display: inline-block"
//         v-model="value4"
//         filterable
//         :left-default-checked="[2, 3]"
//         :right-default-checked="[1]"
//         :titles="['Source', 'Target']"
//         :button-texts="['到左边', '到右边']"
//         :format="{
//           noChecked: '${total}',
//           hasChecked: '${checked}/${total}'
//         }"
//         @change="handleChange"
//         :data="data">
//         <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
//         <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
//         <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
//       </el-transfer>
//     </div>
//   </div>
//   `,
//   data() {
//     const generateData = _ => {
//       const data = []
//       for (let i = 1; i <= 15; i++) {
//         data.push({
//           key: i,
//           label: `备选项 ${i}`,
//           disabled: i % 4 === 0
//         })
//       }
//       return data
//     }
//     return {
//       data: generateData(),
//       value: [1],
//       value4: [1],
//       renderFunc(h, option) {
//         return (
//           <span>
//             {option.key} - {option.label}
//           </span>
//         )
//       }
//     }
//   },
//   methods: {
//     handleChange(value, direction, movedKeys) {
//       console.log(value, direction, movedKeys)
//     }
//   }
// })

export const 数据项属性别名 = (args, { argTypes }) => ({
  template: `
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
  `,
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: []
    }
  }
})
