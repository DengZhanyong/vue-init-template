<template>
  <div class="template flex-center">
    <h2 class="test">This is a vue template page</h2>
    <Panel>
      我使用了面板组件
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
  created() {
    this.$api.projectManager().then((res) => {
      console.log(res)
    })
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
@import '../assets/css/config.less';

.template {
  flex-direction: column;
  color: @main-color;
}
</style>
