export default {
  title: 'Element/ElMessage'
}

export const Attributes = (args, { argTypes }) => ({
  template: `
  <div>
    <el-button v-bind="$props"  @click="open">打开消息提示</el-button>
  </div>
  `,
  methods: {
    open() {
      this.$message('这是一条消息提示')
    }
  }
})

export const 基础用法 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
  `,
  methods: {
    open() {
      this.$message('这是一条消息提示')
    },
    openVn() {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')])
      })
    }
  }
})

export const 不同状态 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
  `,
  methods: {
    open1() {
      this.$message('这是一条消息提示')
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open4() {
      this.$message.error('错了哦，这是一条错误消息')
    }
  }
})

export const 可关闭 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
  `,
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      })
    },
    open2() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open4() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      })
    }
  }
})

export const 文字居中 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-button :plain="true" @click="openCenter">文字居中</el-button>
  </div>
  `,
  methods: {
    openCenter() {
      this.$message({
        message: '居中的文字',
        center: true
      })
    }
  }
})

export const 使用HTML片段 = (args, { argTypes }) => ({
  template: `
  <div>
    <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
  </div>
  `,
  methods: {
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    }
  }
})
