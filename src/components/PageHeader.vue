<template>
    <section class="header-wraper">
        <div class="left">
            <!-- <span>&lt;</span> -->
            <svg class="icon" aria-hidden="true" v-show="isBack" @click="goBack">
                <use xlink:href="#icon-houtui"></use>
            </svg>
            <span>{{title}}</span>
        </div>
        <div class="right"></div>
    </section>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
    props: {
        title: String
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const isBack = computed(() => {
            const isRoot = route.path.indexOf('/') === route.path.lastIndexOf('/')
            return !isRoot
        })
        const goBack = () => {
            router.go(-1)
        }
        return {
            isBack,
            goBack
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
        .left {
            display: flex;
            align-items: center;
            .icon {
                height: 32px;
                width: 20px;
                cursor: pointer;
                padding-right: 10px;
            }
        }
    }
</style>