<template>
    <div class="content">
        <div class="message">
            <el-input class="message-text" type="text" placeholder="请输入留言"></el-input>
            <el-input class="message-time" type="text" placeholder="请输入留言时间"></el-input>
            <el-button type="primary">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .content, .message, .message-text {
        width: 100px;
        height: 20px;
    }.content, .message, .message-time {
        width: 40px;
        height: 20px;
    }
</style>
