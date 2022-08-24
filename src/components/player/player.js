import './player.css'
import * as React from 'react'
import Playbutton from './img/play-button-2.png';

/**
 * Topbar Component.
 * Displays a topbar with icons and links.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const Player = ({ noise }) => {

return (
<div className="playerWrapper">
    <div className="playButtonWrapper">
    <img className="playButtonImg" src={Playbutton} alt="Play button"></img>
    </div>
    <div className="textContent">{noise}</div>

</div>
  )
}
export default Player
