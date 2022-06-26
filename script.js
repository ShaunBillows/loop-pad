// const padOne = document.querySelector(".one");
// let audioOne = new Audio("beat.mp3")
// let isPlayingOne = false


// padOne.addEventListener("click", () => {
//   if (isPlayingOne) {
//     isPlayingOne = false
//     audioOne.pause()
//     audioOne.currentTime = 0
//     padOne.style.backgroundColor = 'blue'
//   } else {
//     isPlayingOne = true
//     audioOne.play()
//     padOne.style.backgroundColor = 'yellow'

//     quantise()
//   }
// })


// const padTwo = document.querySelector(".two");
// let audioTwo = new Audio("bass.mp3")
// let isPlayingTwo = false


// padTwo.addEventListener("click", () => {
//   if (isPlayingTwo) {
//     quantise()

//     isPlayingTwo = false
//     audioTwo.pause()
//     audioTwo.currentTime = 0
//     padTwo.style.backgroundColor = 'blue'
//   } else {
    
//     quantise()
//     padTwo.style.backgroundColor = 'yellow'

//     setTimeout( () => {
//       isPlayingTwo = true
//       audioTwo.play()
//     }, delay)

//   }
// })

// quantisation 
// When a sound is clicked, if no other sounds are playing, get the current time and the bmp info.  When a sound is clicked, and there is another sound plating, calculate the time till the next first beat and delay the new sound starting by that amount.

// bpm is 125 
// let bpm = 125
// let beatInterval = 60 * 1000 / bpm * 16 // miliseconds per 4 bars
// soundIsPlaying = false
// let delay = 0

// let startTime = 0

// const quantise = () => {
//   if (!soundIsPlaying) {
//     startTime = Date.now()
//     soundIsPlaying = true
//   } else {
//     let currentTime = Date.now()
//     let timeDifference = currentTime - startTime
//     delay = beatInterval - timeDifference % beatInterval
//   }
// }


// ----------------------------------------

class Instrument {
  constructor(pad, audio, isPlaying) {
    this.pad = document.querySelector(pad)
    this.audio = new Audio(audio)
    this.isPlaying = false
  }
  playAudio() {
    this.audio.play()
  }
  pauseAudio() {
    this.audio.pause()
    this.audio.currentTime = 0
  }
  setPadColor() {
    if (this.isPlaying) {
      this.pad.style.backgroundColor = "yellow"
    } else {
      this.pad.style.backgroundColor = "blue"     
    }
  }
}

let padOne = new Instrument(".pad-one", "./sounds/1.wav")
let padTwo = new Instrument(".pad-two", "./sounds/2.wav")
let padThree = new Instrument(".pad-three", "./sounds/3.wav")
let padFour = new Instrument(".pad-four", "./sounds/4.wav")
let padFive = new Instrument(".pad-five", "./sounds/5.wav")
let padSix = new Instrument(".pad-six", "./sounds/6.wav")
let padSeven = new Instrument(".pad-seven", "./sounds/7.wav")
let padEight = new Instrument(".pad-eight", "./sounds/8.wav")
let padNine = new Instrument(".pad-nine", "./sounds/9.wav")


instruments = [
  padOne,
  padTwo,
  padThree,
  padFour,
  padFive,
  padSix,
  padSeven,
  padEight,
  padNine
]

const soundIsPlaying = () => {
  for (let i=0; i<instruments.length; i++) {
    if (instruments[i].isPlaying) {
      return true
    }
  }
  return false
}

let bpm = 126
let beatInterval = 60 * 1000 / bpm * 16 // miliseconds per 4 bars
let delay = 0
let startTime = 0

const quantise = () => {
  if (!soundIsPlaying()) {
    startTime = Date.now()
    delay = 0

  } else {
    let currentTime = Date.now()
    let timeDifference = currentTime - startTime
    delay = beatInterval - timeDifference % beatInterval
  }
}

for (let i=0; i<instruments.length; i++) {
  instruments[i].pad.addEventListener("click", () => {

    if (instruments[i].isPlaying) {

      quantise()

      setTimeout(() => {
        instruments[i].pauseAudio()
      }, delay)


      instruments[i].isPlaying = false
      instruments[i].setPadColor()
    } else {

      quantise()

      console.log(soundIsPlaying())

      setTimeout( () => {
        instruments[i].playAudio()
      }, delay)

      instruments[i].isPlaying = true
      instruments[i].setPadColor()
    }
  })
}

// console.log(audioOne)
// soundFour.playAudio()