<template>
  <div class="nav-container">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <router-link :to="{ name: 'Home' }"
            ><i class="fas fa-film"></i
          ></router-link>
        </div>
        <div class="nav__search">
          <form class="form" @submit.prevent="handleSearch">
            <div class="form-group">
              <input type="text" class="form-item" v-model="searchTerm" />
              <button class="btn" type="submit"><i class="fas fa-search"></i></button>
            </div>
          </form>
        </div>
        <div class="nav__user"></div>
        <div style="display: flex">
          <div class="nav__auth" v-if="!user">
            <h3>
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </h3>
            <h3>
              <router-link :to="{ name: 'Signup' }">Register</router-link>
            </h3>
          </div>
          <div class="nav__auth" @click.prevent="handleLogout" v-else>
            <h3 class="btn-clear">
              <i class="fas fa-sign-out-alt"></i>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ts-nocheck
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { ref } from '@vue/reactivity';

export default {
  emits: ['searchTerm', ],
  setup(props, context) {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();
    const searchTerm = ref('');

    const handleLogout = async () => {
      await logout();

      if (!error.value) {
        router.push({ name: "Home" });
      }
    };

    const handleSearch = () => {
      context.emit('searchTerm', searchTerm.value);
    };

    return { handleSearch, error, handleLogout, user, searchTerm };
  },
};
</script>
