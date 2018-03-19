// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic accelerometer example logs a stream
of x, y, and z data from the accelerometer
*********************************************/

var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);
var happy = 'HappyIntro.mp3';
var dark = 'DarkIntro.mp3';
var fileToPlay;
// var sound = require('../audio/audio');
// Initialize the accelerometer.
accel.on('ready', function () {
  console.log("ready!!!!!!!!!!!!!!!!!")
// Stream accelerometer data
accel.on('data', function (xyz) {
  if (xyz[1] > 0){
    fileToPlay = happy;
  } else {
    fileToPlay = dark;
  }
  // console.log('x:', xyz[0].toFixed(2),
  //   'y:', xyz[1].toFixed(2),
  //   'z:', xyz[2].toFixed(2));
});

});

accel.on('error', function(err){
  console.log('Error:', err);
});

module.exports = {
  fileToPlay
}
