//Function constructor of drum element (Classical Pattern, pre ES6)
function DrumElement(source, triggeredKey, keyCode, description) {
    this.source = source; //string url
    this.triggeredKey = triggeredKey; //string 
    this.keyCode = keyCode; //number
    this.description = description; //string
    this.audio = {}; //Element() instance
}

//Prototype Methods (classical pattern)

//Those methods are stored only once in memory
//All instance of DrumElement() inherit from those methods
DrumElement.prototype.init = function () {
    //Set the audio property with the corresponding audio html element
    this.audio = document.getElementById(this.triggeredKey);
}
//getClicked() => called when click event is triggered
DrumElement.prototype.getClicked = function () {
    displayDescription(this.description);
    //use Audio play() Method
    this.audio.play();
}
//getPressed() => called when click event is triggered
DrumElement.prototype.getPressed = function () {
    displayDescription(this.description);
    //use Audio play() Method
    this.audio.play();
}

function getElements() {

    return [
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            "A",
            97,
            "Heater 1"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            "Z",
            122,
            "Heater 2"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            "E",
            101,
            "Heater 3"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            "Q",
            113,
            "Heater 4"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            "S",
            115,
            "Clap"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            "D",
            100,
            "Open HH"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            "W",
            119,
            "Kick n' Hat"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            "X",
            120,
            "Kick"
        ),
        new DrumElement(
            "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            "C",
            99,
            "Closed HH"
        )
    ]
}

function displayDescription(description) {
    $("#description").html(description);
}

//A function that bind audio html element associated to a .drum-pad element
function bindAudioElement(drums, elements) {

    //for i from 0 to drums length
    for (var i = 0; i < drums.length; i++) {
        //Add an inner text that corresponds to one keys on the keyboard
        $(drums[i]).html(elements[i].triggeredKey);
        //Append an audio html element to a .drum-pad element with an id 
        //corresponding to the inner text of its parent.
        let audio = $("<audio></audio>")
            .attr('id', elements[i].triggeredKey)
            .attr('src', elements[i].source)
            .appendTo(drums[i]);
        //init the DrumElement
        elements[i].init();
        //Add a events listener to all the .drum-pad elements
        //here we use bind() to bind this to the DrumElement instance in those methods  
        //by default with jQuery "this" in a handler is binded to the element triggered
        $(drums[i]).on("click", elements[i].getClicked.bind(elements[i]));
    }

}

function handleKeyPress(elements) {
    //Add a kepress event listener on the window
    $(window).on("keypress", function (e) {
        //Get the DrumElement() corresponding the the key pressed
        var drumElement = elements.find(function (element) {
            return e.keyCode === element.keyCode;
        });
        //Call the getPressed method that handle this event
        //call call() method to bind this in getPressed() to that drum element
        if (drumElement) drumElement.getPressed.call(drumElement);
    });
}

$(window).on("load", function () {
    //get our drum pad elements
    var drums = $(".drum-pad");

    //get an array of DrumElement() object
    var elements = getElements();

    bindAudioElement(drums, elements);
    handleKeyPress(elements);
});