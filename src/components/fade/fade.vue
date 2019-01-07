<template>
  <div>
    <el-button @click="show=!show">click me</el-button>
    <div style="display:flex;margin:20px 650px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">隐身符</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">隐身符2</div>
      </transition>
      <transition name="el-zoom-in-center">
        <div v-show="show" class="transition-box">缩放</div>
      </transition>
    </div>
    <el-button @click="goback">返回</el-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true
  }),
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="scss" type="text/css">
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
</style>
