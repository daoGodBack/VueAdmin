<template>
<div>
<el-row style="margin:20px 0 0 0;padding:20px 0;" class="nav">
    <router-link to="/MyElement/fade">
      <el-button title="动画" type="primary" icon='el-icon-star-off' circle></el-button>
    </router-link>
    <router-link to="/MyElement/Layout">
      <el-button title="layout布局" type="success" icon='el-icon-check' circle></el-button>
    </router-link>
    <router-link to="/MyElement/Container">
      <el-button title="容器布局" type="info" icon='el-icon-message' circle></el-button>
    </router-link>
    <router-link to="/MyElement/Form">
      <el-button title="表单" type="danger" icon='el-icon-info' circle></el-button>
    </router-link>
    <router-link to="/MyElement">
      <el-button title="轮播" icon="el-icon-menu" circle></el-button>
    </router-link>
     <router-link to="/MyElement/NavMenu">
      <el-button title="导航" type="warning" icon="el-icon-menu" circle></el-button>
    </router-link>
  </el-row>

  <router-view/>
</div>

</template>
<script>
export default {
  methods: {

  },
  data () {
    return {

    }
  }
}
</script>
<style>
.nav{
  background-color:#545c64
}
</style>
