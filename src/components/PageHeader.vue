<template>
    <section class="header-wraper">
        <div class="left">
            <!-- <span>&lt;</span> -->
            {{title}}
        </div>
        <div class="right"></div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        title: String
    },
    setup() {
        return {
        }
    }
})
</script>

<style lang="less">
    .header-wraper{
        width: 100%;
        height: 64px;
        padding: 10px 20px;
        box-sizing: border-box;
        background: #fff;
        box-shadow: 0 2px 2px 0 rgb(66 64 86 / 5%);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>