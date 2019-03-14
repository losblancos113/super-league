import {DB} from '@/services/fireinit';

export default function ({store, redirect}) {
  console.log("Middleware");
  if (!store.state.user) {
    redirect('/login')
  }
  if (store.state.teams.length === 0) {
    console.log("hello");
    console.info("received data");
    // IDB.transaction('teams', 'readwrite').objectStore('teams').add({id: 1, name: 'test'});
    // // Nếu thành công. Tiến hành lấy notes về
    // request.onsuccess = event => {
    //   console.log("onsuccess");
    //   store.commit('setIndexDb', request.result);
    //   store.state.indexDb.transaction('teams', 'readwrite').objectStore('teams').add({id: 1, name: 'test'})
    // };
  }
}
