<template>
    <div id="app">
        <h4 :class="content">{{ message }} -- {{ env }}</h4>
        <hello></hello>
        <hr/>
        <img width="50" height="50" :src="bg"/>
    </div>
</template>
<script>
    import bg from '@/assets/images/header.jpeg'
//    const hello = resolve => require.ensure([], () => resolve(require('@/components/hello/index.vue')), 'hello')
    const hello = () => import(/* webpackChunkName: "hello" */ '@/components/hello/index.vue')
    const env = process.env.NODE_ENV
    export default {
        name: 'App',
        data(){
            return {
                message: 'Hello',
                content: 'content',
                bg: bg + '?' + new Date().getTime(),
                env: env
            }
        },
        components: {
            hello
        }
    }
</script>
<style>

</style>