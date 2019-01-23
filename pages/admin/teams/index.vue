<template>
  <v-layout align-center justify-space-around row fill-height>
    <v-flex xs12 sm6 md6 lg3 v-for="team in teams" :key="team.id">
      <v-card nuxt :to="'/admin/teams/' + team.id">
        <v-card-title primary-title><h3>{{team.data.name}}</h3></v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import LoginForm from '~/components/LoginForm';
  import { DB } from '@/services/fireinit';
  import {mapMutations} from 'vuex';
  export default {
    name: "index",
    components: {
      LoginForm
    },
    methods: {
      ...mapMutations([
        'setTeamList'
      ])
    },
    data() {
      return {
        // teams: []
      };
    },
    async asyncData({app, params, error}) {
      const ref = DB.collection('teams');
      let snap, teams;
      try {
        teams = [];
        snap = await ref.get();
        if (snap.size > 0) {
          await snap.forEach( async doc => {
            let dataO = doc.data();
            //get players
            let refSubCol = doc.ref.collection('players');
            let snapSubCol = await refSubCol.get();
            let players = [];
            await snapSubCol.forEach(docSub => {
              players.push({
                id: docSub.id,
                name: docSub.data().name,
                kit_number: docSub.data().kit_number
              });
            });
            teams.push({
              id: doc.id,
              data: {
                name: dataO.name,
                players: players
              }
            });
          });
        }
        console.log(teams);
        // let idTeam = data.teams[0].id_team.data;
        // console.log(idTeam);
      } catch (e) {
        console.error(e)
      }
      return {
        teams
      };
    },
    updated(){
      console.log('Mounted');
      this.setTeamList(this.teams);
    }
  }
</script>

<style scoped>

</style>
