<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <vuetify-logo/>
      </div>
      <div class="xs10 offset-xs1">
        <v-data-table :headers="tableHeaders" :items="teams" :disable-initial-sort="true" >
          <template slot="items" slot-scope="props">
            <td>{{ props.index+1 }}</td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.game_played }}</td>
            <td class="text-xs-left">{{ props.item.won }}</td>
            <td class="text-xs-left">{{ props.item.draw }}</td>
            <td class="text-xs-left">{{ props.item.lose }}</td>
            <td class="text-xs-left">{{ props.item.goals_for }}</td>
            <td class="text-xs-left">{{ props.item.goals_against }}</td>
            <td class="text-xs-left">{{ props.item.goals_for - props.item.goals_against }}</td>
            <td class="text-xs-left">{{ props.item.point }}</td>
          </template>
        </v-data-table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { DB } from '@/services/fireinit'
import { compareValues } from '@/ultilities/utils'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      season1: {},
      tableHeaders: [
        {
          text: '#',
          align: 'left',
          sortable: false
        },
          {
            text: 'Team',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'PL', value: 'game_played' },
          { text: 'W', value: 'won' },
          { text: 'D', value: 'draw' },
          { text: 'L', value: 'lose' },
          { text: 'F', value: 'goals_for' },
          { text: 'A', value: 'goals_against' },
          { text: 'GD', value: 'GD' },
          { text: 'Pts', value: 'point' }
        ]
    }
  },
  async asyncData({app, params, error}) {
    console.log("start index");
    const ref = DB.collection('seasons').where('active', '==', true);
    let snap,data;
    try {
      snap = await ref.get();
      if (snap.size > 0) {
        data = snap.docs[0].data();
      }
      // let idTeam = data.teams[0].id_team.data;
      // console.log(idTeam);
    } catch (e) {
      console.log("ERROR "+e);
      console.error(e)
    }
    return {
      seasone_name: data.name,
      teams: data.teams.sort(compareValues('point', 'desc'))
    };
  }
}
</script>
