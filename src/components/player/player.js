import "./player.css";
import * as React from "react";
import { useEffect } from "react"
import Playbutton from "./img/play-button-2.png";
import Sound from "./sounds/test-sound.wav";
import audioController from "../../services/audio-controller";
import { useSelector, useDispatch } from 'react-redux'
import { startPlaying } from '../../redux/reducers/audio'
import { stopPlaying } from '../../redux/reducers/audio'
import store from '../../redux/store'


/**
 * Topbar Component.
 * Displays a topbar with icons and links.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Player = ({ noise }) => {
    const isPlaying = useSelector((state) => state.audio.isPlaying)
    const dispatch = useDispatch()

  const toggleNoise = () => {
    console.log(isPlaying)
    const audio = new Audio(Sound);

    if (isPlaying) {
    store.dispatch(stopPlaying())
        audio.pause()
    } else {
        store.dispatch(startPlaying())
        audio.play()

    }
  };

  useEffect(() => {
  }, [isPlaying])

  return (
    <div className="playerWrapper">
      <div className="playButtonWrapper">
        <img
          className="playButtonImg"
          src={Playbutton}
          alt="Play button"
          onClick={toggleNoise}
        ></img>
      </div>
      <div className="textContent">{noise}</div>
    </div>
  );
};
export default Player;
