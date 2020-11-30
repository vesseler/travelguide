<template>
    <div class="header">
        <div class="header-search">
            <span class="iconfont">&#xe70b;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right" @click="toCity">
            北京<span class="iconfont" style="font-size:.2rem">&#xe64a;</span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toCity() {
            this.$router.push("/City")
        }
    }
}
</script>

<style scoped lang="stylus">
// css里需要加~才行
@import "~csss/var.styl"

    .header {
        width: 100%;
        line-height: 0.88rem;
        background: $bgColor;
        color: $ftColor;
        font-size: .36rem;
        display: flex;
    }
    
    .header-search {
        flex: 1;
        background: #fff;
        height: .6rem;
        margin: .15rem 0 .15rem .3rem;
        border-radius: .1rem;
        color: #e4e7ea;
        line-height: .6rem;
        font-size: .3rem;
        padding-left: .2rem;
        overflow: hidden;
    }
    .header-right {
        font-size: .3rem;
        padding: 0 .3rem;
    }
</style>