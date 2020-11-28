<template>
    <div class="header-swiper" >
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="itme in swiperList" :key="itme.id">
                <img :src="itme.imgUrl" :alt="itme.alts">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  
</template>

<script>
  export default {
    data() {
      return {
            swiperList: [
                {id:"1",imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606552744656&di=7226df493da399a35a2feaf9e6c36599&imgtype=0&src=http%3A%2F%2Fimage.mamicode.com%2Finfo%2F201902%2F20190225201335262323.png",alts:"图片未加载..."},
                {id:"2",imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606552744656&di=7226df493da399a35a2feaf9e6c36599&imgtype=0&src=http%3A%2F%2Fimage.mamicode.com%2Finfo%2F201902%2F20190225201335262323.png",alts:"图片未加载..."},
                // {id:"2",imgUrl:"csss/img/swiper2.png",alts:"图片未加载..."},
                // {id:"3",imgUrl:"csss/img/swiper3.png",alts:"图片未加载..."}
            ],
            
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: "custom",
                    // clickable:true
                },
                loop:true,
                // freeMode:true,
                // watchSlidesProgress:true
                // Some Swiper option/callback...
            }
      }
    },
    computed: {
      
    },
    mounted() {
     
    }
  }
</script>
<style scoped>
    .header-swiper {
        background: #ccc;
        height: 0;
        padding-bottom: 3rem;
        /* width: 100%; */
        /* height: 3rem; */
    }
    .header-swiper img {
        width: 100%;
        height: 3rem;
        font-size: .3rem;
        color: #ccc;
    }
   
</style>