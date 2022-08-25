import "./player.css";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Playbutton from "./img/play-button.png";
import PauseButton from "./img/pause-button.png";
import audioController from "../../services/audio-controller";
import { useSelector, useDispatch } from "react-redux";
import { startPlaying } from "../../redux/reducers/audio";
import { stopPlaying } from "../../redux/reducers/audio";
import store from "../../redux/store";
import { AdUnitsOutlined } from "@mui/icons-material";

// Pause icon credit <a href="https://www.flaticon.com/free-icons/pause" title="pause icons">Pause icons created by Kiranshastry - Flaticon</a>
// Play icon credit <a href="https://www.flaticon.com/free-icons/pause" title="pause icons">Pause icons created by IYAHICON - Flaticon</a>

/**
 * Topbar Component.
 * Displays a topbar with icons and links.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Player = ({ nameOfSound, audioFile }) => {
  const [paused, setPaused] = useState(true);

  const isPlaying = useSelector((state) => state.audio);
  const dispatch = useDispatch();
  const audio = useRef(new Audio(audioFile));

  const play = () => {
    store.dispatch(
      startPlaying({
        isPlaying: true,
        playing: audio.current.src,
      })
    );

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
    // Loop the sound when it ends
    audio.current.addEventListener("ended", function () {
      audio.current.currentTime = 0;
      audio.current.play();
    });

    if (!isPlaying) {
      setPaused(true);
      audio.current.pause();
    }

    // If another audio is playing, pause the current audio
    if (isPlaying && isPlaying.playing !== audio.current.src) {
      setPaused(true);

      audio.current.pause();
    }

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
