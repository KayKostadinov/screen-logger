<template>
  <div class="main__login">
    <div class="container">
      <div class="card text-center">
        <h3>Register</h3>
        <form class="form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              class="form-item"
              type="text"
              placeholder="name"
              v-model="name"
              required
            />
            <input
              class="form-item"
              type="email"
              placeholder="email"
              v-model="email"
              required
            />
            <input
              class="form-item"
              type="password"
              placeholder="password"
              v-model="password"
              required
            />
          </div>
          <button class="btn" v-if="!isPending">Sign up</button>
          <div v-else class="loading"></div>
          <div v-if="error" class="error">{{ error }}</div>
        </form>
        <p>
          Already have an account?
          <router-link :to="{ name: 'Login' }" class="link"
            >Login here.</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";

export default {
  setup() {
    const { error, signup, isPending } = useSignup();
    const name = ref(null);
    const email = ref(null);
    const password = ref(null);

    const handleSubmit = async () => {
      //const res =
      await signup(email.value, password.value, name.value);

      if (!error.value) {
        console.log("logged in");
      }
    };

    return { name, email, password, handleSubmit, error, isPending };
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