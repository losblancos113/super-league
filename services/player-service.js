import { DB } from '@/services/fireinit';

export const addOrUpdatePlayer = (playerId, player) => {
  if (player) {
    console.log('Start update player');
    DB.collection('players').doc(playerId).set(player).then(() => {
      console.log('Add or update player sucess');
    }).catch(error => {
      console.error("Error writing player: ", error);
    });
  }
};
