<template>
  <div class="template">
    <h2 class="test">This is a vue template page</h2>
    <div class="doc">
      <h3 class="title">公共组件</h3>
      <Panel>
        <p>你可以在 <span class="high-light">src/components</span> 文件下新建你的公共组件，
          然后在 <span class="high-light">src/components/components.js</span> 文件中引入该组件并进行全局注册。</p>
      </Panel>

      <h3 class="title">公共样式</h3>
      <div>
        <p>
          对于所有的公共样式，为了更加方便的全局统一管理，你可以写在 <span class="high-light">src/assets/css</span> 中。
        </p>
        <p>
          该文件夹中包含 <span class="high-light">public.less</span> 与 <span class="high-light">config.less</span> 文件，
          <span class="high-light">public.css</span> 与 <span class="high-light">config.css</span> 是通过上面两个文件自动转换得到的，这里不需要关系他们。
        </p>
        <ul>
          <li>
            <span class="high-light">public.less</span>：对于项目中多处用到的样式进行统一管理，以及一些基础样式设置
          </li>
          <li>
            <span class="high-light">config.less</span>：项目中主要使用到的颜色、大小等样式参数设置
          </li>
        </ul>
        <p>
          此项目默认使用的是less预处理器，如果你想使用其他的预处理器，你只需要修改 <span class="high-light">src/main.js</span> 中的引入样式名的后缀。
        </p>
      </div>
      <h3 class="title">工具函数</h3>
      <div>
        <p>在 <span class="high-light">src/assets/utils/</span> 下建立自己的工具函数，建议按照不同类别的工具函数进行分类，
          每一个类别的工具函数单独为一个js文件。然后在此目录下的 <span class="high-light">index.js</span> 文件中引入。</p>
      </div>

      <h3 class="title">http请求</h3>
      <div>
        <p>
          我已在此项目中引入了axios模块，为了方便用户的直接使用，我对axios进行了封装。
        </p>
        <p>
          主要配置了请求拦拦截器、响应拦截器、常见错误码的处理等内容。所有的axios相关内容全部在
          <span class="high-light">src/api/</span> 文件夹下。
        </p>
        <ul>
          <li>
            <span class="high-light">./axios/http.js</span>：对axios的封装
          </li>
          <li>
            <span class="high-light">./axios/config.js</span>：axios相关参数配置，如请求的基础路径
          </li>
          <li>
            <span class="high-light">./index.js</span>：汇总导出所有模块的请求
          </li>
        </ul>
      </div>
      <!-- <h3 class="title">工具函数</h3> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    // this.$api.projectManager().then((res) => {
    //   console.log(res)
    // })
    console.log(this.$utils.nowTime())
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
@import '../assets/css/config.less';

h2 {
  color: @main-color;
  text-align: center;
}
.doc {
  max-width: 1100px;
  margin: 20px auto;
}

</style>
