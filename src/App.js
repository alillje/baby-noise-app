import './App.css';
import Layout from './layout/layout/layout'
import Player from './components/player/player'

function App() {
  return (
    <Layout>
      <Player noise="White Noise" />
      <Player noise="Brown Noise" />
      <Player noise="Rain" />
      <Player noise="Waves" />
    </Layout>
  );
}

export default App;
