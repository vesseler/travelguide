<template>
    <div class="header">
        <div class="headerback" v-show="showHeader"
        @click="toHome">
            <span class="border-back"></span>
            <span class="iconfont back">&#xe659;</span>
        </div> 

        <div class="header-top" v-show="!showHeader" 
        :style="styleOpacity" >
            <div class="header-left" @click="toHome">
                <span class="iconfont">&#xe659;</span>
            </div>
            <div class="header-title">
                城市选择
            </div>
            
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            showHeader: true,
            styleOpacity: {
                opacity:0
            }
        }
    },   
    mounted() {
        let than = this;
        window.addEventListener("scroll",function() {
            let scrolls =  this.document.documentElement.scrollTop/200;
            if(scrolls>0.2) {
                than.showHeader = false
            }else {
                than.showHeader = true
            }
            scrolls = scrolls>1?1:scrolls;
            than.styleOpacity.opacity = scrolls;
        })
    },
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped lang="stylus">
@import "~csss/var.styl"
.headerback {
    position: absolute;
    top: 0;
    left: .1rem;
    top: .1rem;
    width: 0.72rem;
    height: 0.72rem;
    /* background: #000; */
}
.border-back {
    display: block;
    background: #000;
    width: 0.72rem;
    height: 0.72rem;
    opacity: .5;
    border-radius: .36rem;
}
.back {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    width: 0.72rem;
    height: 0.72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .16rem;
    font-size: .36rem;
    font-weight: bold;
}

.header-top {
        position: fixed;
        top: 0;
        width: 100%;
        line-height: 0.88rem;
        background: $bgColor;
        color: $ftColor;
        // opacity: auto;
        // position: relative;
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