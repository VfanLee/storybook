import UlButton from '../../components/UlButton'

export default {
  title: 'Customize/UlButton',
  component: UlButton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UlButton },
  template: '<ul-button v-bind="$props">Button</ul-button>'
})

export const Attributes = Template.bind({})

export const 二次封装示例 = (args, { argTypes }) => ({
  components: { UlButton },
  template: `
  <div>
    <div style="margin: 10px 0">
      <ul-button>默认按钮</ul-button>
      <ul-button type="primary">主要按钮</ul-button>
      <ul-button type="success">成功按钮</ul-button>
      <ul-button type="info">信息按钮</ul-button>
      <ul-button type="warning">警告按钮</ul-button>
      <ul-button type="danger">危险按钮</ul-button>
    </div>

    <div style="margin: 10px 0">
      <ul-button plain>朴素按钮</ul-button>
      <ul-button type="primary" plain>主要按钮</ul-button>
      <ul-button type="success" plain>成功按钮</ul-button>
      <ul-button type="info" plain>信息按钮</ul-button>
      <ul-button type="warning" plain>警告按钮</ul-button>
      <ul-button type="danger" plain>危险按钮</ul-button>
    </div>

    <div style="margin: 10px 0">
      <ul-button round>圆角按钮</ul-button>
      <ul-button type="primary" round>主要按钮</ul-button>
      <ul-button type="success" round>成功按钮</ul-button>
      <ul-button type="info" round>信息按钮</ul-button>
      <ul-button type="warning" round>警告按钮</ul-button>
      <ul-button type="danger" round>危险按钮</ul-button>
    </div>
  </div>
  `
})
