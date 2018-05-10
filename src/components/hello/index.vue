<template>
    <div class="hello-container">
        <button :class="btn" @click="up">UP</button>
        <button @click="visible = true">Click</button>
        <el-dialog :visible.sync="visible" title="Hello"></el-dialog><hr/>
        <div>
            <input type="text" value="10" id="a" ref="a"/> + <input type="text" value="20" id="b" ref="b"/>
            <button @click="method1()">=</button><input type="text" ref="c"/>
        </div>
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
            },
            method1(){
                let a = this.$refs.a.value, b = this.$refs.b.value
                this.$refs.c.value = Number(a) + Number(b)
            }
        }
    }
</script>
<style type="text/css" scoped>
    .btn {
        color: red;
    }
</style>