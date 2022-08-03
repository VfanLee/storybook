import UlButton from '../../components/UlButton'

export default {
  title: 'Customize/UlButton',
  component: UlButton,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'link'],
      description: '预设样式'
    },
    size: {
      control: 'radio',
      options: ['large', 'small', 'mini'],
      description: '尺寸'
    },
    click: {
      description: '自定义点击事件',
    },
    default: {
      description: '默认插槽，用于定义按钮内容'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UlButton },
  template: '<ul-button v-bind="$props">Button</ul-button>'
})
export const Attributes = Template.bind({})

export const 预定样式 = () => ({
  components: { UlButton },
  template: `
    <div>
      <ul-button>默认按钮</ul-button>
      <ul-button type="primary">主要按钮</ul-button>
      <ul-button type="success">成功按钮</ul-button>
      <ul-button type="info">信息按钮</ul-button>
      <ul-button type="warning">警告按钮</ul-button>
      <ul-button type="danger">危险按钮</ul-button>
      <ul-button type="link">Link 链接</ul-button>
    </div>
  `
})

export const 尺寸 = () => ({
  components: { UlButton },
  template: `
    <div>
      <ul-button size="large">大按钮</ul-button>
      <ul-button>默认按钮</ul-button>
      <ul-button size="small">小按钮</ul-button>
      <ul-button size="mini">超小按钮</ul-button>
    </div>
  `
})
