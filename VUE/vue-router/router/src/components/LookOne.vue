<template>
    <div class="look-one">{{msg}}
        <div class="go-two" @click='goTwo'>去look2</div>
    </div>
</template>

<script>
export default {
    name: 'LookOne',
    data () {
        return {
            msg: '你瞅啥'
        }
    },
    methods: {
        goTwo () {
            // this.$router.push('/look/look-two')
            // this.$router.push({ path: '/look/look-two'})
            this.$router.push({ name: 'lookTwo', params: {id: 12345}})
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(from, to)
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log(from, to)
        next()
    }
}
</script>
