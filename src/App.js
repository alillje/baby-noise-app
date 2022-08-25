import './App.css';
import Layout from './layout/layout/layout'
import Player from './components/player/player'
import whiteNoise from './sounds/white-noise.mp3'
import brownNoise from './sounds/brown-noise.mp3'
import pinkNoise from './sounds/pink-noise.mp3'
import wind from './sounds/wind.mp3'
import rainAndThunder from './sounds/rain-and-thunder.mp3'
import oceanWaves from './sounds/ocean-waves.mp3'
import winterWind from './sounds/winter-wind.mp3'
import arcticWind from './sounds/arctic-wind.mp3'

function App() {
  return (
    <Layout>
      <Player nameOfSound="White Noise" audioFile={whiteNoise}/>
      <Player nameOfSound="Brown Noise" audioFile={brownNoise} />
      <Player nameOfSound="Pink Noise" audioFile={pinkNoise}/>
      <Player nameOfSound="Wind" audioFile={wind}/>
      <Player nameOfSound="Rain and Thunder" audioFile={rainAndThunder}/>
      <Player nameOfSound="Ocean Waves" audioFile={oceanWaves}/>
      <Player nameOfSound="Winter Wind" audioFile={winterWind}/>
      <Player nameOfSound="Arctic Wind" audioFile={arcticWind}/>




    </Layout>
  );
}

export default App;
