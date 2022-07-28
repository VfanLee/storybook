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
    size: {
      type: String,
      validator: function (value) {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'success', 'warning', 'danger', 'info', 'text'].indexOf(value) !== -1
      }
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'botton'
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
