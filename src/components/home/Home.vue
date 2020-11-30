<template>
    <div>
        <!-- 三种写法都行 -->
        <!-- <HomeHeader></HomeHeader> -->
        <!-- <HomeHeader /> -->
        <home-header></home-header>
        <home-swiper :swiperList = 'swiperList'></home-swiper>
        <home-icons :iconsList = 'iconsList'></home-icons>
        <home-loaction></home-loaction>
        <home-activity></home-activity>
    </div>
</template>
<script>

import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLoaction from './pages/Loaction'
import HomeActivity from './pages/Activity'

export default {
    components:{
        HomeHeader,HomeSwiper,HomeIcons,HomeLoaction,HomeActivity
    },
    data() {
        return {
            swiperList: [],
            iconsList: []
        }
    },
    mounted() {
        this.$http.get("/api/dataHome.json") 
        .then((res) => {
            const data = res.data.data[0];
            this.swiperList = data.swiperList;
            this.iconsList = data.iconsList;
        })
    }
}
</script>
<style>

</style>