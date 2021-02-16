<template>
    <section class="header-wraper">
        <div class="left">
            <!-- <span>&lt;</span> -->
            <svg class="icon" aria-hidden="true" v-show="isBack" @click="goBack">
                <use xlink:href="#icon-houtui"></use>
            </svg>
            <span>{{title}}</span>
        </div>
        <div class="right">
            <el-button v-for="item in options" :key="item" @click="funExecute(item.functionName)">
                {{item.optName}}
            </el-button>
        </div>
    </section>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import buttonOptions from './utils'
export default defineComponent({
    methods: {
        ...buttonOptions(),
        funExecute(fn) {
            this[fn]()
        }
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const isBack = computed(() => {
            const isRoot = route.path.indexOf('/') === route.path.lastIndexOf('/')
            return !isRoot
        })
        // const search = () => {
        //     console.error('ssss')
        // }
        
        const goBack = () => {
            router.go(-1)
        }
        const options = computed(() => {
            return router?.currentRoute?.value?.meta?.button
        })
        const title = computed(() => {
            return router?.currentRoute?.value?.meta?.rname
        })
        return {
            isBack,
            goBack,
            title,
            options
            // search
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