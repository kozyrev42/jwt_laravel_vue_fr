<template>
  <div>
    <div>
      UserLogin
    </div>

    <router-link to="/" class="btn btn-outline-success mb-2">Home</router-link><br>

    <div class="w-25">
      <input type="email" id="email" class="form-control mt-3 mb-3" placeholder="email">
      <input type="password" id="password" class="form-control mt-3 mb-3" placeholder="password">
      <input type="submit" class="btn btn-primary">
    </div>

  </div>
</template>

<script>
export default {
  name: "UserLogin"
}
</script>

<style scoped>

</style>