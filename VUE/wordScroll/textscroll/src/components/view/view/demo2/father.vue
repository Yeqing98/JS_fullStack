<template>
    <div class="container">
        {{msg}}
        <child @wn='getWn'></child>
    </div>
</template>

<script>
import child from './child'
export default {
    name: 'demo2',
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        getWn(data) {
            this.msg = data
        }
    },
    components: {
        child
    }
}
</script>