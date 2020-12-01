<template>
  <div id="app">
    <!-- keep-alive 将dom驻留在内存当中，防止
    dom的重新渲染，比如原始返回后重新加载的问题-->

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


