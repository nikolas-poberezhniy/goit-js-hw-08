import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
const GET_LOCAL_STORAGE = localStorage.getItem(`${STORAGE_KEY}`);

if (!GET_LOCAL_STORAGE) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(GET_LOCAL_STORAGE);
}

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem(STORAGE_KEY, seconds);
      console.log(seconds);
    });
  }, 1000)
);
