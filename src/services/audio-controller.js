import { startPlaying } from '../redux/reducers/audio'
import { stopPlaying } from '../redux/reducers/audio'
import store from '../redux/store'



const audioController = (audio) => {


  if (audio.paused) {
    store.dispatch(startPlaying())
    audio.play();
  } else {
    audio.muted = true
    audio.pause();
    store.dispatch(stopPlaying())

  }

};

export default audioController;
