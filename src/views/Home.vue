<template>
  <div class="home">
    <h1>Home</h1>
    <a class="button is-danger" @click="LOGIN">Login With Google</a>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions('auth', ['LOGIN']),
};
</script>
