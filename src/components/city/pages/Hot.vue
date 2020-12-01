<template>
    <div class="hot">
        <div class="hot-title">
            热门城市
        </div>
        <ul class="hot-list" >
            <li class="hot-item" v-for="(item,id) in hotList" 
            :key="id" @click="changeCityName(item.loaction)"
            >{{ item.loaction }}</li>
        </ul>
    </div>
</template>
<script>

import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            hotList:[
                {id:1,loaction:"北京"},
                {id:2,loaction:"上海"},
                {id:3,loaction:"南京"},
                {id:4,loaction:"深圳"},
                {id:5,loaction:"贵阳"},
                {id:6,loaction:"乌鲁木齐"},
                {id:7,loaction:"成都"},
                {id:8,loaction:"重庆"},
                {id:9,loaction:"六盘水"}
            ]
        }
    },
    methods:{
        changeCityName(cityName) {
            // console.log(cityName);
            this.changeCity(cityName);
            this.$router.push('/');
        },
        ...mapMutations(["changeCity"])
    }
}
</script>
<style scoped>
.hot-title {
    font-size: .3rem;
    color: #212121;
    padding: .3rem;    
}
.hot-list {
    background: #fff;
    font-size: .28rem;
    position: relative;
    overflow: hidden;
    color: #212121;
}
.hot-list::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.3333%;
    left: 33.3333%;
    border-left: .02rem solid #ddd; 
    border-right: .02rem solid #ddd;
}
.hot-item {
    position: relative;
    width: 33.33333%;
    text-align: center;
    height: 0.9rem;
    line-height: .9rem;
    float: left;
    border-bottom: .02rem solid #ddd;
}
</style>