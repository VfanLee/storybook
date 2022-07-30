<template>
  <div class="user-selector">
    <div class="user-selector__selected" @click.stop="showDropDown">
      <template v-if="adminDTO && adminDTO.userId">
        <user-info :imgUrl="adminDTO.headImage" :name="adminDTO.name" :email="adminDTO.email" @click.native="showDropDown" />
        <i class="el-icon-close" @click.self="cancelSelected"></i>
      </template>
      <div style="color: #dcdfe6" v-else>选择管理员</div>
    </div>
    <transition name="fade">
      <div class="user-selector__dropdown" v-show="show">
        <input class="search-input" ref="search-input" type="text" v-model="keyword" placeholder="请输入姓名或者邮箱，回车进行搜索" @keyup.enter="seatchByKeyword" />
        <div class="list-wrap" ref="listWrap" @scroll="handleScroll($event)">
          <div class="list" ref="list">
            <user-info v-for="item of adminList" :key="item.userId" :imgUrl="item.headImage" :name="item.name" :email="item.mail" @click.native="selectedItem(item)" />
          </div>
          <p class="tipMsg" style="text-align: center" v-show="loading">加载中...</p>
          <p class="tipMsg" style="text-align: center" v-show="noMore">没有更多了</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['adminDTO'],
  data() {
    return {
      show: false,
      adminList: [
        {
          userId: 100,
          name: '测试学生-100',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 101,
          name: '测试学生-101',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 102,
          name: '测试学生-102',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 103,
          name: '测试学生-103',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 104,
          name: '测试学生-104',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 105,
          name: '测试学生-105',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 106,
          name: '测试学生-106',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 107,
          name: '测试学生-107',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 108,
          name: '测试学生-108',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        },
        {
          userId: 109,
          name: '测试学生-109',
          headImage: 'https://www.ulearning.app/common/img/defaultHeaderLg.png?imageView2/1/w/80/h/80',
          mail: 'test@ulearning.com'
        }
      ],
      keyword: '',
      loading: false,
      noMore: false
    }
  },
  methods: {
    async showDropDown() {
      this.show = true
    },
    async handleScroll() {
      this.adminList.push(this.adminList)
    },
    async seatchByKeyword() {},
    selectedItem(userInfo) {
      this.$emit('handle-select-user', userInfo)
    },
    cancelSelected() {
      this.$emit('handle-select-user', {})
    }
  },
  components: {
    'user-info': () => import('../UserInfo')
  },
  mounted() {
    document.addEventListener('click', e => {
      if (e.target.className !== 'search-input' && e.target.className !== 'tipMsg') {
        this.show = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.user-selector {
  position: relative;

  .user-selector__selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    padding: 0 14px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
  }

  .user-selector__dropdown {
    position: absolute;
    top: 48px;
    width: 100%;
    z-index: 999;
    padding: 0 14px;
    border: 1px solid #dcdfe6;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background: #fff;
    box-sizing: border-box;

    .search-input {
      width: 100%;
      height: 36px;
      border: none;
      border-bottom: 1px solid #dcdfe6;
      outline: none;
      margin: 10px 0;
    }

    .list-wrap {
      max-height: 420px;
      overflow-y: scroll;
      overscroll-behavior: none;

      .tipMsg {
        margin: 0;
        line-height: 36px;
      }
    }

    .user-info {
      cursor: pointer;

      &:hover {
        background-color: #f5f7fa;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
