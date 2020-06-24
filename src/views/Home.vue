<template>
  <div class="home flex-center">
    <h1>
      vue-init
    </h1>
    <img src="../assets/images/logo.png" alt="">
    <p>
      快速构建VUE基础项目，更加合理高效的项目模块化管理
    </p>
    <Panel>
      <router-link to="/document" class="link">
        说明文档
      </router-link>
    </Panel>
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
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
@import '../assets/css/config.less';

.home {
  flex-direction: column;
  color: @main-color;
}

.link {
  color: @link-color;
}
</style>
