<template>
  <div class="u-header">
    <div class="header-left">
      <h3 class="title">{{ title }}</h3>
      <slot name="description"></slot>
    </div>
    <div class="header-right">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UHeader',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.u-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    margin: 4px 0;
    font-size: 36px;
  }
}
</style>
