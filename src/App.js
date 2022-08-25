import './App.css';
import Layout from './layout/layout/layout'
import Player from './components/player/player'
import whiteNoise from './sounds/white-noise.wav'
import slowRain from './sounds/slow-rain.wav'
import heavyRain from './sounds/heavy-rain.wav'
import oceanWaves from './sounds/ocean-waves.wav'
import acFan from './sounds/ac-fan.wav'


function App() {
  return (
    <Layout>
      <Player nameOfSound="White Noise" audioFile={whiteNoise} />
      <Player nameOfSound="Slow Rain" audioFile={slowRain}/>
      <Player nameOfSound="Heavy Rain" audioFile={heavyRain} />
      <Player nameOfSound="Ocean Waves" audioFile={oceanWaves} />
      <Player nameOfSound="AC Fan" audioFile={acFan} />

    </Layout>
  );
}

export default App;
