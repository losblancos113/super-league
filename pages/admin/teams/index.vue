<template>
  <v-layout align-center justify-space-around row fill-height>
    <v-flex xs12 sm6 md6 lg3>
      <v-card nuxt to="/admin/players">
        <v-card-title primary-title><h3>Player Manager</h3></v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md6 lg3>
      <v-card nuxt to="/admin/games">
        <v-card-title primary-title><h3>Game Manager</h3></v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md6 lg3>
      <v-card nuxt to="/admin/teams">
        <v-card-title primary-title><h3>Team Manager</h3></v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import LoginForm from '~/components/LoginForm';
  export default {
    name: "index",
    components: {
      LoginForm
    }
  }
</script>

<style scoped>

</style>
