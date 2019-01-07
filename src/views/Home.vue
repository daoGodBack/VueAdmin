<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
        <!-- {{collapsed ? `<i class="el-icon-message"></i>`:sysName}} -->
        <i v-if="collapsed" class="fa fa-youtube-square"  ></i>
        <span v-else><i class="fa fa-pagelines" ></i> {{sysName}}</span>
      </el-col>
      <el-col :span="10">
        <div class="tools" @click.prevent="collapse">
        <i class="fa fa-align-justify"></i>
        </div>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover" >
          <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar"/>{{this.sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native='logout'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <el-menu :default-active="$route.path" style="font-weight:bold" :style="!collapsed?'width:229px;':'width:59px;'" unique-opened  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapsed">
        <el-submenu v-for="(item,index) in $router.options.routes" v-if="!item.hidden" :index="item.path" :key="index">
          <template slot="title">
            <i :class="item.iconCls" style="color:#fff;font-size:20px;"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
          <!-- 三级菜单适用<el-menu-item-group route v-for="child in item.children" :key="child.path" style="padding-top:0px">
            <span slot="title"></span>
            <el-menu-item :index="child.path">{{child.name}}11</el-menu-item>
          </el-menu-item-group> -->
        </el-submenu>
      </el-menu>
      <!-- <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        导航菜单
        <el-menu :default-active="$router.path" class="el-menu-vertical-demo" style="width:229px;" @open="handleopen" @close="handleclose" @select="handleselect"
        unique-opened router v-show='!collapsed'>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" :key="index+''" v-if="!item.leaf" >
              <template slot="title" > <i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>
        导航菜单折叠后
          <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
            <li v-for="(item,index) in $router.options.routes" :key="index" v-if="!item.hidden" class="el-submenu item">
              <template v-if="!item.leaf">
                <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                  <li v-for="(child,index) in item.children" v-if="!child.hidden" :key="index" class="menu-item" style="padding-left:40px;"
                  :class="$router.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
                </ul>
              </template>
            </li>
          </ul>
      </aside> -->
      <section class="content-container" >
      <div class="grid-content bg-purple-light">
        <el-col :span="24" class="breadcrumb-container">
          <strong class="title" style="color:#fff">{{$route.name}}</strong>
          <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" >
              <span style="color:#fff">{{ item.name }}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </section>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      sysName: '云端之舞',
      collapsed: false,
      sysUserName: '',
      sysUserAvatar: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivary: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')
    },
    handleOpen () {
      // console.log();
    },
    handleClose () {
      // 111
    },
    handleselect: function (a, b) {
    },
    // 折叠导航栏
    collapse: function () {
      this.collapsed = !this.collapsed
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
    },
    logout: function () {
      console.log(this)
      this.$confirm('确认退出吗', '提示', {}).then(() => {
        sessionStorage.removeItem('user')
        this.$router.push('/login')
        console.log(this)
      }).catch(() => {})
    }
  },
  mounted () {
    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.name || ''
      this.sysUserAvatar = user.avatar || ''
    }
  }
}
</script>
<style scoped lang="scss">
  @import '../styles/vars';

  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header{
      height:60px;
      line-height: 60px;
      // background: #18c79c;
      background: $color-primary;
      color: #fff;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner{
          cursor: pointer;
          color: #fff;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 10px 0 10px 10px;
            float: right;
          }
        }
      }
      .logo {
      //width:230px;
      height:60px;
      font-size: 22px;
      padding-left:20px;
      padding-right:20px;
      border-color: rgba(238,241,146,0.3);
      border-right-width: 1px;
      border-right-style: solid;
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color:#fff;
      }
    }
    .logo-width{
      width:230px;
    }
    .logo-collapse-width{
      width:60px
    }
    .tools{
      padding: 0px 23px;
      width:14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex:0 0 230px;
      width: 230px;
      // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu{
        border:0px;
        border-radius: 2px;
        height: 100%;
        background-color: #353636;
      }
      .menu-item{
        height: 50px;
        line-height: 50px;
        padding: 0 45px;
        min-width: 200px;

      }
      .collapsed{
        width:60px;
        .item{
          position: relative;
        }
        .submenu{
          position:absolute;
          top:0px;
          left:60px;
          z-index:99999;
          height:auto;
          display:none;
        }

      }
    }
    .menu-collapsed{
      flex:0 0 60px;
      width: 60px;
    }
    .menu-expanded{
      flex:0 0 230px;
      width: 230px;
    }
    .content-container {
      // background: #f1f2f7;
      flex:1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
      .el-menu-item-group__title {
        padding: 0px 0 7px 20px;
      }
    }
  }
}
</style>
