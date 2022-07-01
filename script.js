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
      this.pad.style.backgroundColor = "rgba(0, 38, 255, 0.4)"
    } else {
      this.pad.style.backgroundColor = "rgba(255, 0, 195, 0.25)"
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

lowPassFilter.lowPassFilter(samples, 200, 44100, 0);
lowPassFilter.lowPassFilter()