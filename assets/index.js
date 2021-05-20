import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';
// cuando declaramos scripts desde index.html como type="module"
// hay que ser especificos y debemos declarar la extension .js

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const PlayPauseButton = document.getElementById('PlayPauseButton');
const MuteUnMuteButton = document.getElementById('MuteUnMuteButton');

PlayPauseButton.onclick = () => player.togglePlay();
MuteUnMuteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log(error.message);
  });
}
