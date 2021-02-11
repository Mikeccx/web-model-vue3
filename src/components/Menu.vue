<script lang="jsx">
import PageHeader from '@/components/PageHeader.vue'
import { defineComponent, computed, ref, getCurrentInstance, withScopeId } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    components: {
        PageHeader
    },
    setup() {
        const instance = getCurrentInstance()
        const scopeId = instance.type.__scopeId
        const withId = withScopeId(scopeId)

        const isCollapse = ref(false)
        const isInit = true
        const systemName = 'test'
        const route = useRoute()
        const router = useRouter()
        const activeTitle = computed(() => {
            return '/' + route.path.split('/')[1]
        }).value
        
        const getItem = (list) => {
            if (!list) return []
            return list.map(i => {
                if (Array.isArray(i.children) && i.children.length && i.meta.menu) {
                    return (
                        <el-submenu index={i.path}>
                            <template slot="title">
                                {i.meta.icon ? <i class={i.meta.icon}></i> : ''}
                                <span slot="title">{i.meta.rname}</span>
                            </template>
                            {getItem(i.children)}
                        </el-submenu>
                    )
                }

                return i.meta.menu ? (
                    <el-menuItem index={i.path} key={i.name}>
                        {i.meta.icon ? <i class={i.meta.icon}></i> : ''}
                        <span slot="title">{i.meta.rname}</span>
                    </el-menuItem>
                ) : null
            })
        }
        return withId( () => (
            <div class="page-wraper">
                {isInit ? (
                    <el-container class="container">
                        <div class="aside">
                            <div
                                class={
                                    isCollapse.value
                                        ? 'fold icon'
                                        : 'unfold icon'
                                }
                                ref="title"
                            >
                                <img src={require('../assets/logo.png')} />
                                {!isCollapse.value ? (
                                    <div class="main-tile">{systemName}</div>
                                ) : null}
                                {isCollapse.value ? (
                                    <i
                                        class="collapse-bt el-icon-caret-right"
                                        onClick={() => {
                                            isCollapse.value = !isCollapse.value
                                        }}
                                    ></i>
                                ) : (
                                    <i
                                        class="collapse-bt el-icon-caret-left"
                                        onClick={() => {
                                            isCollapse.value = !isCollapse.value
                                        }}
                                    ></i>
                                )}
                            </div>
                            <el-menu
                                default-active={activeTitle}
                                class="el-menu-vertical-demo"
                                router
                                collapse={isCollapse.value}
                            >
                                {getItem(router.options.routes)}
                            </el-menu>
                        </div>
                        <el-container>
                            <el-main class="main">
                                <page-header title='标题'></page-header>
                                <router-view class="view-wraper"></router-view>
                            </el-main>
                        </el-container>
                    </el-container>
                ) : null}
            </div>))
    }
})
</script>
<style lang="less" scoped>
.page-wraper {
    height: 100%;
    width: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

/deep/ .aside {
    // width: 220px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-right: 1px solid #e1eaf1;
    .fold {
        width: 64px;
        display: flex;
        transition-duration: 0.5s;
        justify-content: center !important;
    }
    .unfold {
        width: 200px;
        padding: 0 20px;
        transition-duration: 0.5s;
    }
    .icon {
        display: flex;
        height: 56px;
        overflow: hidden;
        text-overflow: ellipsis;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        img {
            height: 30px;
            width: 30px;
        }
        .main-tile {
            line-height: 56px;
            text-align: center;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .collapse-bt {
            cursor: pointer;
        }
    }
}
.container {
    height: 100%;
}
.header {
    height: 56px;
    position: relative;
}
/deep/ .el-header {
    padding: 0;
}
/deep/ .el-main {
    padding: 0;
}
.main {
    // height: calc(100% - 61px);
}
/deep/ .el-menu {
    border: none;
}
</style>
