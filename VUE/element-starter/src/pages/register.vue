<template>
    <div class="login_page">
        <!-- 什么时候触发这个transition？ v-show v-if   router 切换的时候  mounted -->
        <!-- router 切换 mounted -->
        <transition name="form-fade" mode="in-out">
            <section class="form_container" v-show="showLogin">
                <div class="manage-tip">
                    <span class="title">注册账号</span>
                </div>
                <el-form :model="loginForm" ref="loginForm" class="loginForm" >
                    <el-form-item prop="username">
                        <span class="fa-tips">
                            <i class="fa fa-user"></i>
                        </span>
                        <el-input class="area" type="text" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
                        <el-input class="area" style="margin-top:20px" type="text" placeholder="请输入密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary">确定</el-button>
            </section>
        </transition>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            showLogin: false
        } 
    },
    mounted() {
        this.showLogin = true
    },
}
</script>

<style lang="less" scoped>
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>