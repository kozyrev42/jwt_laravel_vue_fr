<template>
  <div>
    <div class="badge bg-primary text-wrap">HomeComponent</div> <br/><br/>

    <router-link to="/fruits" class="btn btn-outline-primary mb-2">Фрукты</router-link><br/><br/>
    <router-link v-if="!accessToken" to="/user/login" class="btn btn-success">Login</router-link><br/><br/>
    <router-link v-if="!accessToken" to="/user/registration" class="btn btn-primary">Registration</router-link><br/><br/>

    <button @click.prevent="logout" class="btn btn-danger">Выход</button>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: 'HomeComponent',

  data() {
    return {
      accessToken: null
    }
  },
  props: {
    msg: String
  },

  mounted() {
    this.testApi();
    this.getAccessToken();
  },


  // обновляем статус токена после обновления компонента
  updated() {
    this.getAccessToken();
  },


  methods: {
    // получение токена, из локального хранилища
    getAccessToken() {
      this.accessToken = localStorage.getItem('jwt3_access_token');
    },


    testApi() {
      api.get('/api/test')
        .then(response => {
          console.log(response)
          // вывод в консоль, 'jwt3_access_token' из localStorage
          console.log(localStorage.getItem('jwt3_access_token'));
        })

        .catch(error => {
          console.log(error)
        })
    },

    // метод выхода из системы
    logout() {
      api.post('/api/auth/logout')
        .then(response => {
          console.log(response)
          // удаляем токен из localStorage
          localStorage.removeItem('jwt3_access_token');

          // обновляем компонент
          this.$forceUpdate();
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
