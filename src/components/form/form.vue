<template>
<el-card class="card" shadow="hover">
  <h2>活动申请表</h2>
  <el-steps :active="1" style="width:60%;margin:0 auto;">
    <el-step title="步骤一" icon="el-icon-edit"></el-step>
    <el-step title="步骤二" icon="el-icon-upload"></el-step>
    <el-step title="步骤三" icon="el-icon-picture"></el-step>
  </el-steps>
  <el-form :model="ruleForm" :rules="rules" label-width="80px;" ref="ruleForm" label-position="left" style="min-width:600px;">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="7">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width:200px;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="1">-</el-col>
      <el-col :span="7">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width:200px"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="及时配送">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="线上主题活动" name="type"></el-checkbox>
        <el-checkbox label="活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="现场图片">
      <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type='picture'
      >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="goback()">取消</el-button>
    </el-form-item>
  </el-form>
</el-card>
</template>
<script type="text/javascript" charset="utf-8" src="./js/form.js"></script>
<style scoped lang="scss" type="text/css">
  @import './scss/form.scss';
</style>
