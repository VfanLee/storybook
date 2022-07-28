<template>
  <div class="user-info">
    <div class="avatar">
      <img :src="imgUrl" class="user-avatar" alt="avatar" />
    </div>
    <div class="info-wrap">
      <div class="user-name">{{ name }}</div>
      <div class="user-email">{{ email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['imgUrl', 'name', 'email']
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  margin: 6px 0;

  .avatar .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
  }

  ::v-deep .info-wrap {
    margin-left: 6px;
    line-height: 16px;

    .user-name,
    .user-email {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
}
</style>
