<template>
  <div>
    <div class="badge bg-primary text-wrap">HomeComponent</div> <br/><br/>
    <router-link to="/fruits" class="btn btn-outline-primary mb-2">Фрукты</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
