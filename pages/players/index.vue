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
        <h4 class="display-1">{{ season_name }} Player Stats</h4>
      </div>
      <div class="xs10 offset-xs1">
        <v-data-table :headers="tableHeaders" :items="data" :disable-initial-sort="true" >
          <template slot="items" slot-scope="props">
            <td>{{ props.index+1 }}</td>
            <td>{{ props.item.player.name }}</td>
            <td class="text-xs-left">{{ props.item.goals }}</td>
            <td class="text-xs-left">{{ props.item.assists }}</td>
            <td class="text-xs-left">{{ props.item.team.name }}</td>
          </template>
        </v-data-table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { DB } from '@/services/fireinit'
import { compareValues } from '@/ultilities/utils'

export default {
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
            text: 'Player',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Goal', value: 'goals' },
          { text: 'Assist', value: 'assists' },
          { text: 'Team', value: 'team.name' }
        ]
    }
  },
  async asyncData({app, params, error}) {
    const ref = DB.collection('seasons').where('active', '==', true);
    let snap,data,season_name;
    try {
      snap = await ref.get();
      if (snap.size > 0) {
        season_name = snap.docs[0].data().name;
        let refSub = snap.docs[0].ref.collection('player-stats');
        // console.log(refSub);
        let snapSub = await refSub.get();
        data = [];
        await snapSub.forEach(doc => {
          data.push(doc.data());
        });
      }
      console.log(data);
      // let idTeam = data.teams[0].id_team.data;
      // console.log(idTeam);
    } catch (e) {
      console.error(e)
    }
    return {
      season_name,
      data
    };
  }
}
</script>
