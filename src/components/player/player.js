import "./player.css";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import PlayButton from "./img/play-512.png";
import PauseButton from "./img/pause-512.png";
import { useSelector } from "react-redux";
import { startPlaying } from "../../redux/reducers/audio";
import { stopPlaying } from "../../redux/reducers/audio";
import store from "../../redux/store";

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
  const audio = useRef(new Audio(audioFile));

  /**
   * Plays a sound.
   */
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

  /**
   * Pauses a sound.
   */
  const pause = () => {
    setPaused(true);
    store.dispatch(stopPlaying());
    audio.current.currentTime = 0;
    audio.current.pause();
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
      audio.current.currentTime = 0;
      audio.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="playerWrapper" onClick={paused ? play : pause}>
      <div className="playButtonWrapper">
        <img
          className="playButtonImg"
          src={!paused ? PauseButton : PlayButton}
          alt="Pause button"
        ></img>
      </div>
      <div className="textContent">{nameOfSound}</div>
    </div>
  );
};
export default Player;
