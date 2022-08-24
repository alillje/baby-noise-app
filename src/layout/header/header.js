import './header.css'
import * as React from 'react'
import Logo from './img/baby-noise.png';

/**
 * Topbar Component.
 * Displays a topbar with icons and links.
 *
 * @returns {React.ReactElement} - Sidebar Component.
 */
const TopBar = () => {


return (
<div className="headerWrapper">
    <div className="headerContent">
    <img className="headerLogo" src={Logo} alt="logo"></img>
    </div>

</div>
  )
}
export default TopBar
