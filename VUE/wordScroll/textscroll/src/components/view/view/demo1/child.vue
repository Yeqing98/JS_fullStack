<template>
    <div class="container">666
        {{sendMsg}}
        {{sendData}}
        {{sendAge}}
    </div>
</template>

<script>
export default {
    name: 'demoChild1',
    // props: ['sendMsg','sendData','sendAge'],
    props: {
        sendMsg: {
            type: String,
            require: true
        },
        sendData: {
            type: String,
            require: true
        },
        sendAge: {
            type: String,
            require: true
        },
    },
    data() {
        return {
            
        }
    },
}
</script>