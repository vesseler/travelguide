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
            },
            iconsList: [
                {
                    id:"1",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1272225&size=128",
                    title:"景点门票"
                },
                {
                    id:"2",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=572007&size=128",
                    title:"必游榜单"
                },
                {
                    id:"3",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1254119&size=128",
                    title:"主题乐园"
                },
                {
                    id:"4",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1251171&size=128",
                    title:"动植物园"
                },
                {
                    id:"5",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1288330&size=128",
                    title:"故宫"
                },
                {
                    id:"6",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1293585&size=128",
                    title:"一日游"
                },
                {
                    id:"7",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1284054&size=128",
                    title:"公园"
                },
                {
                    id:"8",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1292100&size=128",
                    title:"热门地区"
                },
                {
                    id:"9",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1291953&size=128",
                    title:"好评地点"
                },
                {
                    id:"10",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1276076&size=128",
                    title:"必赏美食"
                },
                {
                    id:"11",
                    imgUrl:"https://www.easyicon.net/api/resizeApi.php?id=1221650&size=128",
                    title:"旅行手册"
                },
            
            ]
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