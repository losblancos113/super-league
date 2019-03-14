<template>
  <v-dialog v-model="open" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Home</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm12 md6>
              <v-combobox
                v-model="select"
                :items="players"
                item-text="data.name"
                item-value="id"
                label="Player"
              ></v-combobox>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import {getTeams} from '@/services/player-service';
  export default {
    name: "AddPlayerScore",
    props: ['dialog','idTeam'],
    data(){
      return {
        select: '',
        players: []
      }
    },
    computed: {
      open: function () {
        return this.dialog;
      },
      id: function () {
        return this.idTeam;
      }
    },
    watch: {
      open: function(newVal, oldVal){
        console.log("Open" + newVal);
      },
      id: function (newVal, oldVal) {
        console.log("newVal"+newVal+" oldVal:" + oldVal);
        if ('' !== newVal){
          this.players = getTeams(newVal);
        }
      }
    },
    updated(){
      console.log(this.idTeam);
      getTeams(this.id).then(data => {
        this.players = data;
      });
    }
  }
</script>

<style scoped>

</style>
