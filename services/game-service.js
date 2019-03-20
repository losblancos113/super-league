import { DB } from '@/services/fireinit';

export const addGameToSeason = (id, game) => {
  if (game) {
    if (id !== '' && id !== null){
      console.log('Start update game');
      DB.collection('games').doc(id).set(game).then(() => {
        console.log('Add or update game sucess');
      }).catch(error => {
        console.error("Error writing game: ", error);
      });
    }else {
      //add game
      DB.collection('games').add(game).then((docRef) => {
        console.log(docRef.id);
      }).catch(err => {
        console.error(err);
      });
    }
  }
}
