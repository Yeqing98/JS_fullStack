<template>
  <div class="table">
    <el-container>
      <el-header>
        <div class="logo">LOGO</div>
        <div class="user">
          <div class="serve">
            <div class="fankui">
              <img src="../assets/fankui.png" alt class="img" />
              <div class="fankui-text">反馈</div>
            </div>
            <div class="help">
              <img src="../assets/bangzhu.png" alt class="img" />
              <div class="help-text">帮助</div>
            </div>
          </div>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <div class="userInfo">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC"
                  alt
                  class="avatar"
                />
                <div class="user-name">淘小米</div>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item command="quit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="100px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router="true"
          >
            <el-menu-item index="/">
              <i class="el-icon-time"></i>
              <span slot="title">概况</span>
            </el-menu-item>
            <el-menu-item index="data">
              <i class="el-icon-date"></i>
              <span slot="title">数据</span>
            </el-menu-item>
            <el-menu-item index="deal">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">交易</span>
            </el-menu-item>
            <el-menu-item index="goods">
              <i class="el-icon-goods"></i>
              <span slot="title">商品</span>
            </el-menu-item>
            <el-menu-item index="order">
              <i class="el-icon-document"></i>
              <span slot="title">订单</span>
            </el-menu-item>
            <el-menu-item index="client">
              <i class="el-icon-star-on"></i>
              <span slot="title">客户</span>
            </el-menu-item>
            <el-menu-item index="setting">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      if (command === "quit") {
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  height: 100%;
  background-color: #f2f3f7;
}
.el-header {
  height: 62px;
  width: 100%;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 30px;
  font-weight: 700;
  color: #5584ff;
  margin-left: 10px;
}
.user {
  display: flex;
  align-items: center;
}
.serve {
  display: flex;
}
.fankui {
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-size: 14px;
}
.img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.help {
  display: flex;
  align-items: center;
  margin: 0 20px;
  font-size: 14px;
}
.userInfo {
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 14px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 12px;
}
.user-name {
  font-size: 13px;
  color: #999;
}

.el-aside {
  height: 100%;
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-top: 1px;
}
.el-menu-vertical-demo{
  margin-top: 20px;
}


.el-main {
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
