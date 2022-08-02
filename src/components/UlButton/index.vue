<template>
  <button :class="classes" :size="size" :type="type" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UlButton',
  props: {
    type: {
      type: String
    },
    size: {
      type: String
    }
  },
  computed: {
    classes() {
      return ['ul-btn', this.type ? 'ul-btn--' + this.type : '', this.size ? 'ul-btn--' + this.size : '']
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
.ul-btn {
  padding: 6px 12px;
  border: 1px solid #ccc;
  color: #333;
  font-size: 14px;
  line-height: 1.42857143;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.ul-btn--primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.ul-btn--success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.ul-btn--warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}

.ul-btn--danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}

.ul-btn--info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

.ul-btn--link {
  font-weight: 400;
  color: #337ab7;
  border-color: transparent;
  border-radius: 0;
}

.ul-btn--large {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}

.ul-btn--small {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.ul-btn--mini {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
</style>
