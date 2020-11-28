<template>
    <div>
        <!-- 三种写法都行 -->
        <!-- <HomeHeader></HomeHeader> -->
        <!-- <HomeHeader /> -->
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-loaction></home-loaction>
    </div>
</template>
<script>

import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLoaction from './pages/Loaction'

export default {
    components:{
        HomeHeader,HomeSwiper,HomeIcons,HomeLoaction
    }
}
</script>
<style>

</style>