<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="xs10 md12 lg12 offset-xs1">
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
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.data.name" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.data.kit_number" label="Kit Number"></v-text-field>
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
        <v-data-table
          :headers="tableHeaders"
          :items="data"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.index+1 }}</td>
            <td>{{ props.item.data.name }}</td>
            <td class="text-xs-left">{{ props.item.data.kit_number }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
        </v-data-table>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
  import {DB} from '@/services/fireinit';
  import {addOrUpdatePlayer} from '@/services/player-service';

  export default {
    data() {
      return {
        dialog: false,
        editedIndex: -1,
        editedItem: {
          id: '',
          data: {
            name: '',
            kit_number: 0
          }
        },
        defaultItem: {
          id: '',
          data: {
            name: '',
            kit_number: 0
          }
        },
        max3chars: v => v.length <= 3 || 'Input too long!',
        tableHeaders: [
          {
            text: '#',
            align: 'left',
            sortable: false
          },
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {text: 'Kit Number', value: 'kit_number'}
        ]
      };
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog(val) {
        val || this.close()
      }
    },
    async asyncData({app, params, error}) {
      const ref = DB.collection('players');
      let snap, data;
      try {
        snap = await ref.get();
        if (snap.size > 0) {
          data = [];
          await snap.forEach(doc => {
            let dataO = doc.data();
            data.push({
              id: doc.id,
              data: {
                name: dataO.name,
                kit_number: dataO.kit_number
              }
            });
          });
        }
        // console.log(data);
        // let idTeam = data.teams[0].id_team.data;
        // console.log(idTeam);
      } catch (e) {
        console.error(e)
      }
      return {
        data
      };
    },
    methods: {
      editItem(item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.data.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.data.splice(index, 1)
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
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
        }
        addOrUpdatePlayer(this.editedItem.id, this.editedItem.data);
        this.close()
      }
    }
  }
</script>
