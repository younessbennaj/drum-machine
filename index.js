//When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

//When I press the trigger key associated with each .drum-pad...

//When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element
let sounds = {
    q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    w: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    e: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    a: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    s: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    d: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    x: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    c: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}

//Function constructor of drum element
function DrumElement(source, triggeredKey) {
    this.source = source;
    this.triggeredKey = triggeredKey;
}

let heater1 = new DrumElement(
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "Q"
)

console.log(heater1);

//array of drum elements
let elements = [];
$(window).on("load", function () {
    console.log('page loaded');
});