<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <v-btn class="singIn mb-2" primary @click.native="facebookLogin">Facebook</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
      return {
        formEmail: '',
        formPassword: ''
      };
  },
  methods: {
    facebookLogin() {
      this.$store.dispatch('signInWithFacebook').then(() => {
        location.reload();
      }).catch((e) => {
        console.log(e.message);
      });
    }
  }
}
</script>
