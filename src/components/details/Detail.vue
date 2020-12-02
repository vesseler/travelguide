<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div style="height:1000px"></div>
    </div>
    
    
</template>
<script>
import DetailBanner from './pages/Banner'
import DetailHeader from './pages/Header'

export default {
    components: {
        DetailBanner,DetailHeader
    },
    activated() {
        document.documentElement.scrollTop = 0 ;
    }
}
</script>
<style scoped>

</style>