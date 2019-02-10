<template>
  <v-layout
    column
    justify-center
  >
    <v-flex
      xs12
      sm8
      md10
      lg10>
      <v-toolbar flat color="white">
        <v-toolbar-title>Player</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field disable v-model="editedItem.id" label="Id"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.id_season" label="Session"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-switch color="blue darken-2" v-model="editedItem.is_completed" label="Completed"></v-switch>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.data.home.name" label="Home"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.data.away.name" label="Away"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-menu
                      v-model="date_picker"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="editedItem.start"
                        label="Start date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="editedItem.start" @input="date_picker = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-dialog
                      ref="dialog"
                      v-model="time_picker"
                      :return-value.sync="time"
                      persistent
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="time"
                        label="Start time"
                        prepend-icon="access_time"
                        readonly
                      ></v-text-field>
                      <v-time-picker
                        v-if="time_picker"
                        v-model="time"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="time_picker = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-expansion-panel popout class="xs12 sm8 md10 lg10">
        <v-expansion-panel-content
          v-for="(item,i) in games"
          :key="i">
          <div slot="header">
            <v-layout align-center justify-space-between row fill-height>
              <v-flex xs4 sm4 md4 lg4 class="text-xs-right">{{ item.home.name }}</v-flex>
              <v-flex xs4 sm4 md4 lg4 class="text-xs-center">{{ formatTimestamp(item.start) }}</v-flex>
              <v-flex xs4 sm4 md4 lg4 class="text-xs-left">{{ item.away.name }}</v-flex>
            </v-layout>
          </div>
          <v-card>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex';
  import {DB} from '@/services/fireinit';
  import {formatTimestamp, formatDate} from '@/ultilities/utils';

  export default {
    data() {
      return {
        date_picker: false,
        time: null,
        time_picker: false,
        dialog: false,
        editedIndex: -1,
        editedItem: {
          id: '',
          data: {
            id_season: '',
            is_completed: false,
            stadium: '',
            start: new Date().toJSON(),
            week: 0,
            home_score: 0,
            away_score: 0,
            away: {
              id_team: '',
              name: ''
            },
            home: {
              id_team: '',
              name: ''
            },
            who_scored: {
              away: [],
              home: []
            }
          }
        },
        defaultItem: {
          id: '',
          data: {
            id_season: '',
            is_completed: false,
            stadium: '',
            start: new Date(),
            week: 0,
            home_score: 0,
            away_score: 0,
            away: {
              id_team: '',
              name: ''
            },
            home: {
              id_team: '',
              name: ''
            },
            who_scored: {
              away: [],
              home: []
            }
          }
        },
        max3chars: v => v.length <= 3 || 'Input too long!'
      }
    },
    computed: {
      ...mapGetters([
        'teamAvailable'
      ]),
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog(val) {
        val || this.close()
      }
    },
    methods: {
      ...mapMutations([
        'setTeamList'
      ]),
      formatTimestamp,
      formatDate,
      editItem(item) {
        this.editedIndex = this.games.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.games.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.games.splice(index, 1)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.games[this.editedIndex], this.editedItem)
        } else {
          this.games.push(this.editedItem)
        }
        // addOrUpdatePlayer(this.editedItem.id, this.editedItem.data);
        this.close()
      }
    },
    async asyncData({app, params, error}) {
      const ref = DB.collection('games').where('is_completed', '==', false);
      let snap;
      let data = [];
      try {
        snap = await ref.get();
        if (snap.size > 0) {
          snap.forEach(doc => {
            data.push(doc.data());
          });
        }
      } catch (e) {
        console.error(e)
      }
      return {
        games: data,
      };
    },
    async mounted() {
      console.log("Mounted");
      if (this.teamAvailable == null || this.teamAvailable.length === 0) {
        //reload team info
        console.log("Reload team data");
        const ref = DB.collection('teams');
        let snap, teams;
        teams = [];
        snap = await ref.get();
        await snap.forEach(doc => {
          let dataO = doc.data();
          //get players
          let players = [];
          let refSubCol = doc.ref.collection('players');
          let snapSubCol = refSubCol.get().then(snapSubCol => {
            snapSubCol.forEach(docSub => {
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
        });
        console.log(teams);
        this.setTeamList(teams);
        console.log("Team available " + JSON.stringify(teams));
        console.log("Team data reloaded");
      }
    }
  }
</script>
