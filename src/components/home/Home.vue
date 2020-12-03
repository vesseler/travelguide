<template>
    <div class="home">
        <!-- 三种写法都行 -->
        <!-- <HomeHeader></HomeHeader> -->
        <!-- <HomeHeader /> -->
        <home-header></home-header>
        <home-swiper :swiperList = 'swiperList'></home-swiper>
        <home-icons :iconsList = 'iconsList'></home-icons>
        <home-loaction></home-loaction>
        <home-activity></home-activity>
        <home-like></home-like>
        <home-recommend></home-recommend>
    </div>
</template>
<script>
import {mapState} from 'vuex'

import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLoaction from './pages/Loaction'
import HomeActivity from './pages/Activity'
import HomeLike from './pages/Like'
import HomeRecommend from './pages/recommend'

export default {
    components:{
        HomeHeader,HomeSwiper,HomeIcons,HomeLoaction,HomeActivity,HomeLike,HomeRecommend
    },
    data() {
        return {
            swiperList: [],
            iconsList: [],
            changeCity:''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods:{
        getHttp() {
            this.$http.get("/api/dataHome.json") 
            .then((res) => {
                const data = res.data.data;
                data.forEach((item,index) => {
                    if(item.city == this.city) {
                        this.swiperList = item.swiperList;
                        this.iconsList = item.iconsList;
                        this.hotList = item.hotList;
                    }
            });
            
        })
        }
    },
    mounted() {
        this.changeCity = this.city
        this.getHttp()
    },
    activated() {
        if(this.changeCity != this.city) {
            this.getHttp();
            this.changeCity = this.city;
        }
    }    
}
</script>
<style>
.home {
    background: #f5f5f5;
}
</style>