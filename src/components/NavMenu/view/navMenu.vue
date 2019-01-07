<template>
  <el-container>
  <el-header style="padding:0 0;">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" prop="index">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4"><a href="javascript:();" target="_blank">订单管理</a></el-menu-item>
</el-menu>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" text-color="#fff"   @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
  <el-menu-item index='5' @click="change()">
    <div v-if="isCollapse" title="展开">
    <i class="el-icon-arrow-right" ></i>
  </div>
  <div v-else title="收起">
     <i class="el-icon-arrow-left"></i>
  </div>
  </el-menu-item>

</el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <div style="width:100%">
          <el-row style="margin:5px 0px 40px  0;">
            <el-col :span="6">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>
          <el-form label-width="80px">
            <el-row :gutter="10">
              <el-col :xs="24" :sm='24' :md="24" :lg="8">
                    <el-form-item label="名称">
                      <!-- <el-input placeholder="请输入搜索名称" prefix-icon="el-icon-search" size="small" length="10"></el-input> -->
                      <el-autocomplete
                        style="width:300px;"
                        size="small"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :trigger-on-focus="true"
                        @select="handleSelect1"
                        clearable
                      ></el-autocomplete>
                    </el-form-item>
              </el-col>
              <el-col :xs="24" :sm='24' :md="24" :lg="8">
                <el-form-item label="日期">
                  <el-date-picker v-model="time" size="small" type="daterange" range-separator="至" start-placeholde="开始日期" end-placeholde="结束日期"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm='24' :md="24" :lg="8" :xl="6">
                <el-form-item>
                  <el-button type="primary" size="small" :loading="search" @click="searchForm()"><i class="el-icon-search"></i> 搜索</el-button>
                  <el-button type="success" size="small" @click="add()"><i class="el-icon-circle-plus-outline"></i> 添加</el-button>
                  <el-button type="warning" size="small" @click="dialogVisible=true"><i class="el-icon-message"></i> 弹出</el-button>
                  <el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleCloseDialog">
                    <span>今晚吃什么？</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">吃鸡</el-button>
                    </span>
                  </el-dialog>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <el-table :data="dataTable" stripe fit max-height="1200" v-loading='loading'>
          <el-table-column prop='date' label="日期" ></el-table-column>
          <el-table-column prop='name' label="姓名" ></el-table-column>
          <el-table-column prop='province' label="省份"></el-table-column>
          <el-table-column prop='city' label="城市" ></el-table-column>
          <el-table-column prop='address' label="地址"></el-table-column>
          <el-table-column prop='zip' label="邮编" ></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" ><i class="el-icon-edit"> 编辑</i></el-button>
              <!-- <el-button @click.native.prevent="deleteRow(scope.$index,dataTable)" type="text" size="small">删除</el-button> -->
              <!-- <el-button size="mini" ><i class="el-icon-edit"> 编辑</i></el-button> -->
              <!-- <el-button type="danger" size="mini"><i class="el-icon-delete">删除</i></el-button> -->
              <el-popover placement="top" title="确认要删除吗？" width="160" v-model="scope.row.visible">
                <div style="text-align:right; margin:0">
                  <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
                  <el-button type="danger" size="mini" @click.native.prevent="deleteRow(scope,dataTable)">确定</el-button>
                </div>
                <!-- deleteRow(scope.$index,dataTable) -->
                <el-button type="danger" size="mini" slot="reference" ><i class="el-icon-delete">删除</i></el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
         <div class='block'>
      <el-pagination @size-change='handleSizeChange' @current-change='handleCurrentChange'
      :current-page="currentPage4" :page-sizes="[10,20,30,40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
      :total="40" ></el-pagination>
    </div>
      </el-footer>
    </el-container>
  </el-container>
</el-container>
</template>
<style scpoed lang='scss' type='text/css'>
@import '../assets/scss/navMenu.scss';
</style>
<script type="text/script">
export default {
  data () {
    return {
      isCollapse: false,
      dialogVisible: false,
      restaurants: [],
      state: '',
      dataTable: [
        {
          date: '2018-12-29',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        },
        {
          date: '2018-12-29',
          name: '王大虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        },
        {
          date: '2018-12-29',
          name: '王二虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        },
        {
          date: '2018-12-29',
          name: '王三虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        },
        {
          date: '2018-12-29',
          name: '王二虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        },
        {
          date: '2018-12-29',
          name: '王二虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        },
        {
          date: '2018-12-29',
          name: '王二虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          visible: false
        }
      ],
      currentPage4: 5,
      activeIndex: '1',
      activeIndex2: '1',
      loading: true,
      search: false,
      time: '',
      visible2: false,
      item: {
        date: '2018-12-29',
        name: '王二虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        visible: false
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    change () {
      this.isCollapse = !this.isCollapse
    },
    deleteRow (scope, rows) {
      scope.visible = false
      rows.splice(scope.$index, 1)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    searchForm () {
      this.search = true
      setTimeout(() => {
        this.search = false
      }, 2000)
    },
    add () {
      let it = {
        date: '2018-12-29',
        name: '王二虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        visible: false
      }
      this.dataTable.push(it)
    },
    handleCloseDialog (done) {
      this.$confirm('确认关闭？').then(_ => {
        done()
      })
        .catch(_ => {})
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      clearTimeout(this.timeout)
      // 模拟加载
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createFilter (queryString) {
      return (restaurants) => {
        return (restaurants.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
        { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
        { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
        { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
        { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
        { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
        { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
        { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
        { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
        { 'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层' },
        { 'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号' },
        { 'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路' },
        { 'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺' },
        { 'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819' },
        { 'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
        { 'value': '枪会山', 'address': '上海市普陀区棕榈路' },
        { 'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号' },
        { 'value': '钱记', 'address': '上海市长宁区天山西路' },
        { 'value': '壹杯加', 'address': '上海市长宁区通协路' },
        { 'value': '唦哇嘀咖', 'address': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
        { 'value': '爱茜茜里(西郊百联)', 'address': '长宁区仙霞西路88号1305室' },
        { 'value': '爱茜茜里(近铁广场)', 'address': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
        { 'value': '鲜果榨汁（金沙江路和美广店）', 'address': '普陀区金沙江路2239号金沙和美广场B1-10-6' },
        { 'value': '开心丽果（缤谷店）', 'address': '上海市长宁区威宁路天山路341号' },
        { 'value': '超级鸡车（丰庄路店）', 'address': '上海市嘉定区丰庄路240号' },
        { 'value': '妙生活果园（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': '香宜度麻辣香锅', 'address': '长宁区淞虹路148号' },
        { 'value': '凡仔汉堡（老真北路店）', 'address': '上海市普陀区老真北路160号' },
        { 'value': '港式小铺', 'address': '上海市长宁区金钟路968号15楼15-105室' },
        { 'value': '蜀香源麻辣香锅（剑河路店）', 'address': '剑河路443-1' },
        { 'value': '北京饺子馆', 'address': '长宁区北新泾街道天山西路490-1号' },
        { 'value': '饭典*新简餐（凌空SOHO店）', 'address': '上海市长宁区金钟路968号9号楼地下一层9-83室' },
        { 'value': '焦耳·川式快餐（金钟路店）', 'address': '上海市金钟路633号地下一层甲部' },
        { 'value': '动力鸡车', 'address': '长宁区仙霞西路299弄3号101B' },
        { 'value': '浏阳蒸菜', 'address': '天山西路430号' },
        { 'value': '四海游龙（天山西路店）', 'address': '上海市长宁区天山西路' },
        { 'value': '樱花食堂（凌空店）', 'address': '上海市长宁区金钟路968号15楼15-105室' },
        { 'value': '壹分米客家传统调制米粉(天山店)', 'address': '天山西路428号' },
        { 'value': '福荣祥烧腊（平溪路店）', 'address': '上海市长宁区协和路福泉路255弄57-73号' },
        { 'value': '速记黄焖鸡米饭', 'address': '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
        { 'value': '红辣椒麻辣烫', 'address': '上海市长宁区天山西路492号' },
        { 'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼' },
        { 'value': '阳阳麻辣烫', 'address': '天山西路389号' },
        { 'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ]
    },
    handleSelect1 (item) {
      console.log(item)
    }
  },
  mounted: function () {
    this.restaurants = this.loadAll()
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>
