<template>
    <div class="header-swiper" >
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="itme in swiperList" :key="itme.id">
                <img :src="itme.imgUrl" :alt="itme.alts">
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
    </div>
  
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  export default {
    props:['swiperList'],
    // name: 'carrousel',
    // components: {
    //   Swiper,
    //   SwiperSlide
    // },
    data() {
      return {
        swiperOptions: {
        //   pagination: {
        //     el: '.swiper-pagination'
        //   },
          loop:true
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.$swiper
    //   }
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