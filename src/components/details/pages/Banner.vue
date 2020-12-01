<template>
    <div class="banner" >
        <div  @click="onSwiper">
            <div class="banner-img">
                <img src="https://r.sinaimg.cn/large/tc/mmbiz_qpic_cn/86874fc82f91a9b0747a6ddfa8529410.jpeg" 
                alt="">
            </div>
            <div class="banner-title">
                金海湖风景区(AAAA景区)
            </div>
        </div>       

        <div class="img-swiper" v-show="displayimg" @click="offswiper">
            <img src="https://r.sinaimg.cn/large/tc/mmbiz_qpic_cn/10097dfe86daed0b755023abdf236435.jpg" 
            alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayimg:false
        }
    },
    methods: {
        onSwiper() {
            this.displayimg=true
        },
        offswiper() {
            this.displayimg=false
        }
    }
}
</script>

<style scoped>
.banner {
    position: relative;
}
.banner-img {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    background: red;
}
.banner-img img {
    width: 100%;
}
.banner-title   {
    position: absolute;
    bottom: .3rem;
    left: .3rem;
    font-size: .36rem;
    color: #fff;
}
.img-swiper {
    background: #000;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-swiper {
    width: 100%;
}
</style>