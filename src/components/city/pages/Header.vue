<template>
    <div class="header">
        <div class="header-left" @click="toHome">
            <span class="iconfont">&#xe659;</span>
        </div>
        <div class="header-title">
            城市选择
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped lang = "stylus">
@import "~csss/var.styl"
.header {
        width: 100%;
        line-height: 0.88rem;
        background: $bgColor;
        color: $ftColor;
        position: relative;
    }
    .header-left {
        width: 1rem;
        padding: 0 .34rem;
        
        text-align: center;
        font-weight: bold;
        position: absolute;
    }
    .header-title {
        font-size: .36rem;
        text-align: center;
    }
</style>