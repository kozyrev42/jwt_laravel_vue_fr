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
  },

  mounted() {
    this.testApi();
  },

  methods: {
    testApi() {
      this.$axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/test`)
        .then(response => {
          console.log(response)
        })

        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
