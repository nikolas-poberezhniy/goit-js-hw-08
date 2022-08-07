import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

if (!localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
      console.log(seconds);
    });
  }, 1000)
);
