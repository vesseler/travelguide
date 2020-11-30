<template>
    <div>
        <div class="title">
            字母排序
        </div>
        <ul class="sort-list" >
            <li class="sort-item" v-for="(item,id) in sortList" :key="id">{{ item.loaction}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sortList:[
                {id:1,loaction:"A"},
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
    }
}
</script>
<style scoped>
.title {
    font-size: .3rem;
    color: #212121;
    padding: .3rem; 
}
.sort-list {
    background: #fff;
    font-size: .28rem;
    position: relative;
    overflow: hidden;
}
/* .hot-list::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.3333%;
    left: 33.3333%;
    border-left: .02rem solid #ddd; 
    border-right: .02rem solid #ddd;
} */
.sort-item {
    width: 16.6666%;
    text-align: center;
    height: 0.9rem;
    line-height: .9rem;
    float: left;
    border-bottom: .02rem solid #ddd;
}
</style>