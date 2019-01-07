<template>
  <el-carousel class="toBottom" indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{item}}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<style scopedt lang="scss" type="text/css">
@import '../assets/scss/carousel.scss';
</style>
