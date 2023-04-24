import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const videoPlayer = document.getElementById('vimeo-player');
const player = new Player(videoPlayer);
const VIDEO_KEY = 'videoplayer-current-time';

const onPlay = (e) => {
    localStorage.setItem(VIDEO_KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
const time = localStorage.getItem(VIDEO_KEY);

player.setCurrentTime(time || 0);