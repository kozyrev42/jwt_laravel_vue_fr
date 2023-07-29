<template>

  <div>
    <div class="badge bg-primary text-wrap">FruitsComponent</div> <br/><br/>
    <router-link to="/" class="btn btn-outline-success mb-2">Home</router-link><br>

  </div>


</template>

<script>
export default {
  name: 'FruitsComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
