<template>
    <div class="Activity border-top">
        <!-- <div class="Activity-item border-right">
            <img class="border-right" :src="leftimg"></img>
        </div>
        <div class="Activity-item">
            <img  :src="rightimg"></img>
        </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    .Activity {
        display: flex;
        position: relative;
        background: #ccc;
    }
    .Activity .Activity-item {
        flex: 1;
        overflow: hidden;
        height: 1.2rem;

    }
    .Activity .Activity-item img {
        width: 100%;
        height: 1.2rem;
    }
</style>