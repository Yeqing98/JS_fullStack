<template>
    <div class="container">
        <child :send-msg="message" :send-data="data" :send-age="age"></child>
    </div>
</template>

<script>
import child from './child'
export default {
    name: 'demo1',
    data() {
        return {
            message: '我很帅',
            data: '2019-06-11',
            age: '18'
        }
    },
    components: {
        child
    }
}
</script>