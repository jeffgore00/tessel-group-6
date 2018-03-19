var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);
var happy = './audio/HappyIntro.mp3';
// var dark = './audio/DarkIntro.mp3';
var fileToPlay;

var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, happy);
var sound = new av.Player(mp3);


// sound.play();

// sound.on('ended', function(seconds) {
//   sound.play();
// });


// var sound = require('../audio/audio');
// Initialize the accelerometer.
accel.on('ready', function () {
  console.log("ready!!!!!!!!!!!!!!!!!")
// Stream accelerometer data
 setInterval(function(){
accel.on('data', function (xyz) {
  // setInterval(function(){
    // while (true){
    console.log('x:', xyz[0].toFixed(2),
    'y:', xyz[1].toFixed(2),
    'z:', xyz[2].toFixed(2));
      if (xyz[1] > 0){
        sound.play();
      } else {
        sound.pause();
      }
    })
 }, 100)

  // var mp3 = path.join(__dirname, fileToPlay);
  // var sound = new av.Player(mp3);
  // sound.play()
  // }, 100)


});

// });

accel.on('error', function(err){
  console.log('Error:', err);
});

module.exports = {
  fileToPlay
}
