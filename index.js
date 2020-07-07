//When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

//When I press the trigger key associated with each .drum-pad...

//When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element

//Function constructor of drum element
function DrumElement(source, triggeredKey) {
    this.source = source;
    this.triggeredKey = triggeredKey;
}

DrumElement.prototype.getClicked = function (e) {
    console.log(this);
}

function getElements() {

    return [
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            "A"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            "Z"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            "E"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            "Q"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            "S"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            "D"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            "W"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            "X"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            "C"
        )
    ]
}
//A function that bind audio html element associated to a .drum-pad element
function bindAudioElement() {
    //get an array of DrumElement() object
    var elements = getElements();

    //get our drum pad elements
    var drums = $(".drum-pad");

    //for i from 0 to drums length
    for (var i = 0; i < drums.length; i++) {
        //Add an inner text that corresponds to one keys on the keyboard
        $(drums[i]).html(elements[i].triggeredKey);
        //Append an audio html element to a .drum-pad element with an id 
        //corresponding to the inner text of its parent.
        $("<audio></audio>")
            .attr('id', elements[i].triggeredKey)
            .appendTo(drums[i]);
        //Add a click event listener to all the .drum-pad elements
        //here we use bind() to bind this to the DrumElement instance in getClicked()  
        //by default with jQuery "this" in a handler is binded to the element triggered
        $(drums[i]).on("click", elements[i].getClicked.bind(elements[i]));
    }
}

$(window).on("load", function () {

    bindAudioElement();

});