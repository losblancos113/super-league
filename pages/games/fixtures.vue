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
               <v-flex xs4 sm4 md4 lg4 class="text-xs-center">{{ formatTimestamp(item.start) }}</v-flex>
               <v-flex xs4 sm4 md4 lg4 class="text-xs-left">{{ item.away.name }}</v-flex>
             </v-layout>
           </div>
           <v-card>
             <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
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
  }
}
</script>
