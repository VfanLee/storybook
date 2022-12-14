export default {
  title: 'Element/Button',
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['medium', 'small', 'mini'],
      description: '尺寸'
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
      description: '类型'
    },
    plain: {
      control: 'boolean',
      defaultValue: false,
      description: '是否朴素按钮'
    },
    round: {
      control: 'boolean',
      defaultValue: false,
      description: '是否圆角按钮'
    },
    circle: {
      control: 'boolean',
      defaultValue: false,
      description: '是否圆形按钮'
    },
    loading: {
      control: {
        type: 'boolean'
      },
      defaultValue: false,
      description: '是否加载中状态'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '是否禁用状态'
    },
    icon: {
      control: 'text',
      description: '图标类名'
    },
    autofocus: {
      control: 'boolean',
      defaultValue: false,
      description: '是否默认聚焦'
    },
    'native-type': {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
      description: '原生 type 属性'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '常用的操作按钮。'
      }
    }
  }
}

export const Attributes = () => ({
  template: ''
})

export const 基础用法 = () => ({
  template: `
  <div>
    <el-row style="margin: 10px 0">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row style="margin: 10px 0">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row style="margin: 10px 0">
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row style="margin: 10px 0">
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
  `
})
基础用法.parameters = {
  docs: {
    description: {
      story: '基础的按钮用法。'
    }
  }
}

export const 禁用状态 = () => ({
  template: `
  <div>
    <el-row style="margin: 10px 0">
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <el-row style="margin: 10px 0">
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>
  </div>
  `
})
禁用状态.parameters = {
  docs: {
    description: {
      story: '按钮不可用状态。'
    }
  }
}

export const 文字按钮 = () => ({
  template: `
  <div>
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
  </div>
  `
})
文字按钮.parameters = {
  docs: {
    description: {
      story: '没有边框和背景色的按钮。'
    }
  }
}

export const 图标按钮 = () => ({
  template: `
  <div>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
  `
})
图标按钮.parameters = {
  docs: {
    description: {
      story: '带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。'
    }
  }
}

export const 按钮组 = () => ({
  template: `
  <div>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
  `
})
按钮组.parameters = {
  docs: {
    description: {
      story: '以按钮组的方式出现，常用于多项类似操作。'
    }
  }
}

export const 加载中 = () => ({
  template: `
  <div>
    <el-button type="primary" :loading="true">加载中</el-button>
  </div>
  `
})
加载中.parameters = {
  docs: {
    description: {
      story: '点击按钮后进行数据加载操作，在按钮上显示加载状态。'
    }
  }
}

export const 不同尺寸 = () => ({
  template: `
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
  </div>
  `
})
不同尺寸.parameters = {
  docs: {
    description: {
      story: 'Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。'
    }
  }
}
