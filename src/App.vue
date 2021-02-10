<template>
    <Menu></Menu>
</template>
<script>
import Menu from './components/Menu.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        Menu
    }
})
</script>
<style>
#app {
    height: 100%;
    width: 100%;
}
</style>
