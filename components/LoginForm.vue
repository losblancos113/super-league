<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
    </v-flex>
  </v-layout>

</template>

<script>
  import firebase, {auth, GoogleProvider} from '~/services/fireinit'
  export default {
    methods: {
      async googleSignUp () {
        // await auth.signInWithPopup(GoogleProvider)
        // console.log('Finished Google login')
        // return location.reload()
        this.$store.dispatch('signInWithGoogle').then(() => {
          console.log('inside then statement on login');
        }).catch(e => {
          console.log(e.message);
        });
      }
    }
  }
</script>

<style lang="css">
  .signIn {
  }
</style>
