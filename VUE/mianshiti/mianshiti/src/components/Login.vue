<template>
    <div class="login">
        <div class="text">
            <div class="text-index">
                <div class="big-title">电商管理系统</div>
                <div class="title-text">多数据可视化展示的电商管理系统</div>
                <div class="title-text">一起结构数字世界，碰撞科技创新思想</div>
            </div>
        </div>
        <div class="login-input">
            <div class="login-index">
                <div class="login-title">登录</div>
                <span class="next-input">
                    <input class="next-medium" type="text" v-model="formLogin.username" placeholder="用户名">
                </span>
                <span class="next-input">
                    <input class="next-medium" type="password" v-model="formLogin.password" placeholder="密码">
                </span>
                <el-radio style="display: block; margin-bottom: 20px;" v-model="formLogin.remember" label="1">记住密码</el-radio>
                <el-button type="primary" style="width: 100%;" @click="handleSunmit()" >登录</el-button>
                <div  class="zhuce">立即注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            formLogin: {
                username: '',
                password: '',
                remember: false
            }
        }
    },
    methods: {
        handleSunmit() {
            if(this.formLogin.username && this.formLogin.password) {
                localStorage.setItem('user',this.formLogin.username)
                // localStorage.setItem('user')
                this.$router.push({path: '/'})
            }else {
                console.log(alert("账号或者密码不能为空"))
            }
        }
    },
}
</script>

<style scoped>
    .login{
        width: 100%;
        height: 100%;
        background: url('../assets/bg.jpg') no-repeat;
        background-size: cover;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text{
        flex: 1;
    }
    .text-index{
        margin: auto;
        width: 400px;
        color: #333;
    }
    .big-title{
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 20px;
        line-height: 1.5;
    }
    .title-text{
        font-size: 16px;
        line-height: 40px;
    }

    .login-input{
        flex: 1;
    }
    .login-index{
        width: 400px;
        padding: 40px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 6px;
        margin: auto;
    }
    .login-title{
        margin-bottom: 40px;
        color: #333;
        font-size: 28px;
        font-weight: 500;
        text-align: center;
    }
    .next-input{
        height: 32px;
        border-radius: 3px;
        width: 100%;
        padding-left: 20px;
        box-sizing: border-box;
        border: 1px solid #c4c6cf;
        display: block;
        margin-bottom: 20px;
    }
    .next-medium{
        height: 28px;
        width: 100%;
        border: none;
        outline: none;
        background-color: #fff;
    }
    .zhuce{
        text-align: center;
        color: #5584ff;
        margin-top: 20px;
    }
</style>
