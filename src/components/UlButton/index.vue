<template>
  <el-button
    :size="size"
    :type="type"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :autofocus="autofocus"
    :native-type="nativeType"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </el-button>
</template>

<script>
export default {
  name: 'UlButton',
  props: {
    /** 尺寸 */
    size: {
      type: String,
      validator: function (value) {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    /** 类型 */
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(value) !== -1
      }
    },
    /** 是否朴素按钮 */
    plain: {
      type: Boolean,
      default: false
    },
    /** 是否圆角按钮 */
    round: {
      type: Boolean,
      default: false
    },
    /** 是否圆形按钮 */
    circle: {
      type: Boolean,
      default: false
    },
    /** 是否加载中状态 */
    loading: {
      type: Boolean,
      default: false
    },
    /** 是否禁用状态 */
    disabled: {
      type: Boolean,
      default: false
    },
    /** 图标类名 */
    icon: {
      type: String
    },
    /** 是否默认聚焦 */
    autofocus: {
      type: Boolean,
      default: false
    },
    /** 原生 type 属性 */
    nativeType: {
      type: String,
      default: 'botton',
      validator: function (value) {
        return ['button', 'submit', 'reset'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.u-button {
  display: inline-block;
  padding: 11px 20px;
  border: 0;
  border-radius: 3em;
  background-color: transparent;
  color: #333;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
</style>
