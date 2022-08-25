import "./player.css";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Playbutton from "./img/play-button-2.png";
import PauseButton from "./img/pause-button.png";
import audioController from "../../services/audio-controller";
import { useSelector, useDispatch } from "react-redux";
import { startPlaying } from "../../redux/reducers/audio";
import { stopPlaying } from "../../redux/reducers/audio";
import store from "../../redux/store";
import { AdUnitsOutlined } from "@mui/icons-material";

/**
 * Topbar Component.
 * Displays a topbar with icons and links.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Player = ({ nameOfSound, audioFile }) => {
  const [paused, setPaused] = useState(true);

  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const dispatch = useDispatch();
  const audio = useRef(new Audio(audioFile));

  const play = () => {
    store.dispatch(startPlaying());

    setPaused(false);
    audio.current.play();
  };

  const pause = () => {
    setPaused(true);
    store.dispatch(stopPlaying());

    audio.current.pause();
    audio.current.currentTime = 0;
  };

  useEffect(() => {
    // Loop the sound when it has ended
    audio.current.addEventListener('ended', function() {
        audio.current.currentTime = 0;
        audio.current.play()
    })

    if (!isPlaying) {
      setPaused(true);
      audio.current.pause()
    }
    console.log(isPlaying)
    console.log()
  }, [isPlaying]);

  return (
    <div className="playerWrapper">
      <div className="playButtonWrapper">
        <img
          className="playButtonImg"
          src={!paused ? PauseButton : Playbutton}
          alt="Pause button"
          onClick={paused ? play : pause}
        ></img>
      </div>
      <div className="textContent">{nameOfSound}</div>
    </div>
  );
};
export default Player;
