<template>
  <h1><v-layout
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
                      <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-text-field v-model="editedItem.kit_number" label="Kit Number"></v-text-field>
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
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.kit_number }}</td>
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
  </v-layout></h1>
</template>
<script>
  import {mapGetters} from 'vuex';
  import { DB } from '@/services/fireinit';
  import {addOrUpdatePlayer} from '@/services/player-service';

  export default {
    computed: {
      ...mapGetters([
        'teamAvailable'
      ]),
      data() {
        return this.teamAvailable.filter(item => item.id === this.$route.params.id)[0].data.players;
      },
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
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
    watch: {
      dialog(val) {
        val || this.close()
      }
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
