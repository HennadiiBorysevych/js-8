const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const CURRENT_TIME = 'videoplayer-current-time';
const videoFrame = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(videoFrame);

const saveCurrentTime = function (time) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(time));
};
const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttledSaveCurrentTime);
const seconds = localStorage.getItem(CURRENT_TIME);

player.setCurrentTime(JSON.parse(seconds).seconds);
