<template>

  <div>
    <div class="badge bg-primary text-wrap">FruitsComponent</div> <br/><br/>
    <router-link to="/" class="btn btn-outline-success mb-2">Home</router-link><br>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fruit in fruits" :key="fruit.id">
          <th scope="row">{{ fruit.id }}</th>
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
export default {
  name: 'FruitsComponent',
  props: {
    msg: String
  },

  // при монтировании компонента, получаем список фруктов
  mounted() {
    this.getFruits();
  },

  // в data, будем хранить список фруктов, которые получим с сервера
  data() {
    return {
      fruits: null
    }
  },

  // методы
  methods: {
    // метод получения фруктов
    getFruits() {
      this.$axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/fruits`)
        .then(response => {
          console.log(response)
          this.fruits = response.data.data
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
