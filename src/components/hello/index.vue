<template>
    <div class="hello-container">
        <button :class="btn" @click="up">UP</button>
        <el-button @click="visible = true">Click</el-button>
        <el-dialog :visible.sync="visible" title="Hello"></el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'hello',
        data(){
            return {
                btn: 'btn',
                visible: false
            }
        },
        methods: {
            up(){
                alert("UP CLICK.")
            }
        }
    }
</script>
<style type="text/css" scoped>
    .btn {
        color: red;
    }
</style>