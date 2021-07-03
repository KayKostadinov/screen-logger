<template>
  <div class="main__login">
    <div class="container">
      <div class="card text-center">
        <h3>Login</h3>
        <form class="form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              class="form-item"
              type="email"
              placeholder="email"
              v-model="email"
            />
            <input
              class="form-item"
              type="password"
              placeholder="password"
              v-model="password"
            />
          </div>
          <button class="btn" v-if="!isPending">Login</button>
          <div v-else class="loading"></div>
          <div v-if="error" class="error">{{ error }}</div>
        </form>
        <p>
          Don't have an account?
          <router-link :to="{ name: 'Signup' }" class="link"
            >Sign up here.</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";

export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const email = ref(null);
    const password = ref(null);

    const handleSubmit = async () => {
      //const res =
      await login(email.value, password.value);

      if (!error.value) {
        console.log("logged in");
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style lang="scss">
.main__login {
  .btn {
    margin: 1rem 0;
  }
}
</style>