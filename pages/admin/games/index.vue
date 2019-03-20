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
                    <v-text-field disabled v-model="editedItem.id" label="Id"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="editedItem.data.id_season" label="Session"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-switch color="blue darken-2" v-model="editedItem.data.is_completed" label="Completed"></v-switch>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-combobox
                      v-model="editedItem.data.home"
                      :items="teams"
                      items-text="`${data.item.name}`"
                      chips
                      label="Home"
                      return-object
                      autocomplete="off"
                    >
                      <template slot="selection" slot-scope="data">
                        {{ data.item.name}}
                      </template>
                      <template slot="item" slot-scope="data">
                        <v-list-tile-content>
                          <v-list-tile-title v-html="`${data.item.name}`">
                          </v-list-tile-title>
                          <!--<v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>-->
                        </v-list-tile-content>
                      </template>
                    </v-combobox>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-combobox
                      v-model="editedItem.data.away"
                      :items="teams"
                      items-text="`${data.item.name}`"
                      chips
                      label="Away"
                      return-object
                      autocomplete="off"
                    >
                      <template slot="selection" slot-scope="data">
                        {{ data.item.name}}
                      </template>
                      <template slot="item" slot-scope="data">
                        <v-list-tile-content>
                          <v-list-tile-title v-html="`${data.item.name}`">
                          </v-list-tile-title>
                          <!--<v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>-->
                        </v-list-tile-content>
                      </template>
                    </v-combobox>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-menu
                      v-model="start_date_picker"
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
                        v-model="start_date"
                        label="Start date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="start_date" @input="start_date_picker = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-dialog
                      ref="dialog"
                      v-model="start_time_picker"
                      :return-value.sync="start_time"
                      persistent
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="start_time"
                        label="Start time"
                        prepend-icon="access_time"
                        readonly
                      ></v-text-field>
                      <v-time-picker
                        v-if="start_time_picker"
                        v-model="start_time"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="start_time_picker = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(start_time)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-menu
                      v-model="end_date_picker"
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
                        v-model="editedItem.end"
                        label="End date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="editedItem.end" @input="end_date_picker = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-dialog
                      ref="dialog2"
                      v-model="end_time_picker"
                      :return-value.sync="end_time"
                      persistent
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="end_time"
                        label="End time"
                        prepend-icon="access_time"
                        readonly
                      ></v-text-field>
                      <v-time-picker
                        v-if="end_time_picker"
                        v-model="end_time"
                        full-width
                      >
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="end_time_picker = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog2.save(end_time)">OK</v-btn>
                      </v-time-picker>
                    </v-dialog>
                  </v-flex>
                  <v-container grid-list-md xs12 sm12 md12 v-if="editedItem.data.is_completed">
                    <v-layout wrap>
                      <v-flex xs12 sm6 md6>
                        <v-text-field min="0" type="number" v-model="editedItem.data.home_score"
                                      label="Home score"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md6>
                        <v-text-field min="0" type="number" v-model="editedItem.data.away_score"
                                      label="Away score"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md6>
                        <v-list>
                          <v-list-tile
                            v-for="(item, index) in editedItem.data.who_scored.home"
                            :key="index"
                            avatar
                            @click=""
                          >
                            <v-list-tile-action>
                              {{item.goal}}
                            </v-list-tile-action>

                            <v-list-tile-content>
                              <v-list-tile-title v-text="item.name"></v-list-tile-title>
                            </v-list-tile-content>
                          </v-list-tile>
                        </v-list>
                        <v-btn id="btnAddHome" fab dark @click="openScoreDialog(editedItem.data.home.id_team, 'home')"
                               color="indigo">
                          <v-icon dark>add</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-flex xs12 sm6 md6>
                        <v-list>
                          <v-list-tile
                            v-for="(item, index) in editedItem.data.who_scored.away"
                            :key="index"
                            avatar
                            @click=""
                          >
                            <v-list-tile-action>
                              {{item.goal}}
                            </v-list-tile-action>

                            <v-list-tile-content>
                              <v-list-tile-title v-text="item.name"></v-list-tile-title>
                            </v-list-tile-content>
                          </v-list-tile>
                        </v-list>
                        <v-btn fab dark color="indigo" @click="openScoreDialog(editedItem.data.away.id_team, 'away')">
                          <v-icon dark>add</v-icon>
                        </v-btn>
                      </v-flex>
                      <v-dialog v-model="openDialogPlayer" persistent max-width="600px">
                        <v-card>
                          <v-card-title>
                            <span class="headline">Home</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container grid-list-md>
                              <v-layout wrap>
                                <v-flex xs12 sm12 md6>
                                  <v-combobox
                                    v-model="selected_player"
                                    :items="player_list"
                                    item-text="data.name"
                                    item-value="id"
                                    label="Player"
                                  ></v-combobox>
                                </v-flex>
                                <v-flex xs12 sm12 md6>
                                  <v-text-field
                                    label="xGoal"
                                    placeholder="Goal"
                                    solo
                                    type="number"
                                    min="0"
                                    v-model="player_goal"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="addGoalByPlayer">Save</v-btn>
                            <v-btn color="blue darken-1" flat @click="openDialogPlayer = false">Close</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-layout>
                  </v-container>
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
              <v-flex v-if="item.is_completed" xs4 sm4 md4 lg4 class="text-xs-center">{{ item.home_score }} - {{ item.away_score }}</v-flex>
              <v-flex v-else xs4 sm4 md4 lg4 class="text-xs-center">{{ formatTimestamp(item.start) }}</v-flex>
              <v-flex xs4 sm4 md4 lg4 class="text-xs-left">{{ item.away.name }}</v-flex>
            </v-layout>
          </div>
          <v-card>
            <v-container>
              <v-layout wrap>
                <v-flex xs6 sm6 md6 class="text-xs-left">
                  <ul style="list-style-type:none">
                    <li :key="j" v-for="(player_score, j) in item.who_scored.home">
                      {{ player_score.name }} x {{ player_score.goal }}
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs6 sm6 md6 class="text-xs-right">
                  <ul style="list-style-type:none">
                    <li :key="j" v-for="(player_score, j) in item.who_scored.away">
                      {{ player_score.name }} x {{ player_score.goal }}
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-container>
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
  import {getTeams} from '@/services/player-service';
  import {addGameToSeason} from '@/services/game-service';
  import moment from 'moment';
  import * as firebase from 'firebase/app';

  // //indexedDB
  // if (!('indexedDB' in window)) {
  //   console.log('This browser doesn\'t support IndexedDB');
  // }
  // reloadTeamData(teams => {
  //   console.log("teams size=" +teams.length);
  // });
  // let request = window.indexedDB.open('superleague', 1);
  // let indexDB = null;
  // request.onupgradeneeded = event => {
  //   console.log("onupgradeneeded");
  //   indexDB = event.target.result;
  //   indexDB.createObjectStore('teams', {
  //     autoIncrement: true,
  //     keyPath: 'id'
  //   });
  // };
  // request.onsuccess = function (event) {
  //   indexDB = request.result;
  //   console.log("success: " + indexDB);
  // };

  export default {
    data() {
      return {
        editSide: 'home',
        ownGoal: false,
        player_goal: 0,
        selected_player: '',
        idTeamSelect: '',
        openDialogPlayer: false,
        teams: [
          {id_team: 'lienquan', name: 'Liên Quân'},
          {id_team: 'sixteen', name: 'Sixteen'}
        ],
        player_list: [],
        player_edited_item: {},
        start_date_picker: false,
        end_date_picker: false,
        start_date: '',
        start_time: null,
        end_time: null,
        start_time_picker: false,
        end_time_picker: false,
        dialog: false,
        editedIndex: -1,
        editedItem: {
          id: '',
          data: {
            id_season: 'WecIXZjJsJG46boTWI2p',
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
      },
      start_date(val){
        if (this.start_time !== '' && this.start_time){
          console.log(this.start_date);
          let time = this.start_time.split(':');
          let momentObj = moment(this.start_date);
          let date = momentObj.hour(time[0]).minute(time[1]).toDate();
          this.editedItem.data.start = firebase.firestore.Timestamp.fromDate(date);
          console.log(this.editedItem.data.start);
        }
      },
      start_time(val){
        if (this.start_date !== '' && this.start_date){
          console.log(this.start_date);
          let time = this.start_time.split(':');
          let momentObj = moment(this.start_date);
          let date = momentObj.hour(time[0]).minute(time[1]).toDate();
          this.editedItem.data.start = firebase.firestore.Timestamp.fromDate(date);
          console.log(this.editedItem.data.start);
        }
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
        console.log(this.editedItem);
        console.log(this.editedItem.data.start + ' ' + this.start_time);
        addGameToSeason(this.editedItem.id, this.editedItem.data);
        this.close()
      },
      openScoreDialog(idTeam, side) {
        console.log("Clicked" + idTeam);
        getTeams(idTeam).then(data => this.player_list = data);
        this.openDialogPlayer = true;
        this.idTeamSelect = idTeam;
        this.editSide = side;
      },
      addGoalByPlayer(){
        console.log('addGoalByPlayer');
        console.log(this.selected_player);
        if ('home' === this.editSide){
          this.editedItem.data.who_scored.home.push({
            goal: this.player_goal,
            id_player: this.selected_player.id,
            name: this.selected_player.data.name
          });
        } else {
          this.editedItem.data.who_scored.away.push({
            goal: this.player_goal,
            id_player: this.selected_player.id,
            name: this.selected_player.data.name
          });
        }
        this.player_goal = 0;
        this.selected_player = '';
        this.openDialogPlayer = false
      }
    },
    async asyncData({app, params, error}) {
      const ref = DB.collection('games');
      let snap;
      let data = [];
      try {
        snap = await ref.get();
        if (snap.size > 0) {
          snap.forEach(doc => {
            data.push(doc.data());
          });
        }
        console.log(data.length);
      } catch (e) {
        console.error(e)
      }
      return {
        games: data,
      };
    }
    // async created() {
    // console.log("Created");

    // }
    // }
  }

  function reloadTeamData(_callback) {
    //reload team info
    console.log("Reload team data");
    const ref = DB.collection('teams');
    let snap, teams;
    teams = [];

    ref.get().then(snap => {
      snap.forEach(doc => {
        let dataO = doc.data();
        //get players
        let players = [];
        let refSubCol = doc.ref.collection('players');
        refSubCol.get().then(snapSubCol => {
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
      })
    });
    _callback(teams);
  }
</script>
