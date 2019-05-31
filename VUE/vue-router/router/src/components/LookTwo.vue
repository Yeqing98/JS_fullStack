<template>
    <div class="look-two">{{msg}}
        {{$route.params.id}}
    </div>
</template>

<script>
export default {
    name: 'LookTwo',
    data () {
        return {
            msg: '瞅你咋地'
        }
    }
}
</script>
