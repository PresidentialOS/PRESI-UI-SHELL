const loudness = require('loudness');
module.exports = {
  get: loudness.getVolume,
  set: loudness.setVolume,
  mute: loudness.setMuted,
  isMuted: loudness.getMuted,
};