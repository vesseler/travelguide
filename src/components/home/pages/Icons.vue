<template>
    <div class="icons">

         <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in page" :key="item.id">
                <div class="icons-item" v-for="i in item" :key="i.id">
                    <img :src="i.imgUrl" alt="">
                    <p>{{ i.title }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  
    </div>
</template>
<script>
export default {
    props:['iconsList'],
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: "custom",
                    // clickable:true
                },
                // loop:true,
                // freeMode:true,
                // watchSlidesProgress:true
                // Some Swiper option/callback...
            }
            
        }
    },
    computed: {
        page() {
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx]) {
                    pages[idx] = [];
                }
                pages[idx].push(item);
            });

            return pages;
        }
    }
}
</script>

<style scoped>
    .icons {
        width: 100%;
        overflow: hidden;
    }
    .icons-item {
        width: 25%;
        padding-bottom: 25%;
        height: 0;
        background: #fff;
        float: left;
    }
    .icons-item img {
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        margin: 0 auto;
        padding-top: .2rem;
    }
    .icons-item p {
        margin-top: .1rem;
        font-size: .28rem;
        text-align: center;
        color: #212121;
    }
</style>