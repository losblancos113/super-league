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
      <div class="text-xs-center">

      </div>
        <v-expansion-panel popout class="xs12 sm8 md10 lg10">
         <v-expansion-panel-content
           v-for="(item,i) in games"
           :key="i">
           <div slot="header">
             <v-layout align-center justify-space-between row fill-height>
               <v-flex xs4 sm4 md4 lg4 class="text-xs-right">{{ item.home.name }}</v-flex>
               <v-flex xs4 sm4 md4 lg4 class="text-xs-center">
                 <div>{{ formatTimestamp(item.start) }}</div>
                 <div>{{ item.home_score }} - {{ item.away_score }}</div>
               </v-flex>
               <v-flex xs4 sm4 md4 lg4 class="text-xs-left">{{ item.away.name }}</v-flex>
             </v-layout>
           </div>
           <v-card>
             <v-card-text>
               <v-layout align-center justify-space-between row fill-height>
                 <v-flex xs6 sm6 md6 lg6>
                   <v-list>
                     <v-list-tile
                     v-for="(player,i) in item.who_scored.home"
                     :key="i"
                     avatar
                     @click=""
                     >
                     <v-list-tile-content>
                       <v-list-tile-title class="text-xs-left"><span class="green--text text--darken-1">{{player.name}}</span> x {{player.goal}}</v-list-tile-title>
                     </v-list-tile-content>

                     <!-- <v-list-tile-avatar>
                       <img :src="item.avatar">
                     </v-list-tile-avatar> -->
                   </v-list-tile>
                  </v-list>
                 </v-flex>
                 <v-flex xs6 sm6 md6 lg6>
                   <v-list>
                     <v-list-tile
                     v-for="(player,i) in item.who_scored.away"
                     :key="i"
                     avatar
                     @click=""
                     >
                     <v-list-tile-content>
                       <v-list-tile-title class="text-xs-right"><span class="green--text text--darken-1">{{player.name}}</span> x {{player.goal}}</v-list-tile-title>

                     </v-list-tile-content>

                     <!-- <v-list-tile-avatar>
                       <img :src="item.avatar">
                     </v-list-tile-avatar> -->
                   </v-list-tile>
                  </v-list>
                 </v-flex>
               </v-layout>
             </v-card-text>
           </v-card>
         </v-expansion-panel-content>
       </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>
<script>
import { DB } from '@/services/fireinit';
import { formatTimestamp } from '@/ultilities/utils';
export default {
  methods: {
    formatTimestamp,
  },
  async asyncData({app, params, error}){
    const ref = DB.collection('games').where('is_completed', '==', true).orderBy('start', 'desc');
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
  }
}
</script>
