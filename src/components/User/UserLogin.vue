<template>
  <div>
    <div>
      UserLogin
    </div>

    <router-link to="/" class="btn btn-outline-success mb-2">Home</router-link><br>

    <div class="w-25">
      <input v-model="email" type="email" id="email" class="form-control mt-3 mb-3" placeholder="email">
      <input v-model="password" type="password" id="password" class="form-control mt-3 mb-3" placeholder="password">
      <input @click.prevent="login" type="submit" class="btn btn-primary">
    </div>

  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "UserLogin",

  data() {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    login() {
      api.post('/api/auth/login',
          {
            email: this.email,
            password: this.password
          })
        .then(response => {
          // помещаем токен в localStorage
          localStorage.setItem('jwt3_access_token', response.data.access_token);
        })

        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>