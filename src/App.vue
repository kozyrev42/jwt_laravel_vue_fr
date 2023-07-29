<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // ничего не импортируем, так как используем роутинг
  }
}
</script>

<style>
#app {
  margin: 40px;
}
</style>
