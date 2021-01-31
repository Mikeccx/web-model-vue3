

<script>
import { defineComponent} from 'vue'
export default defineComponent({
    setup() {
        return(
            <h1 class="test">11111</h1>
        )
    },
    render() {
        return (
            <span class="test">11111</span>
        )
    }
})
</script>

<style lang="less" scoped>
    .test{
        font-size: 99px;
    }
</style>
