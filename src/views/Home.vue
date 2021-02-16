<template>
  <div class="home-wraper">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        const search = () => {
            console.log('test')
        }
        return {
            search
        }
    }
})
</script>
<style lang="less" scoped>
.home-wraper {
    
}
</style>