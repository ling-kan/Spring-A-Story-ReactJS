export default function PositiveAffirmAudio() {
    var sounds = [
        new Audio("./assets/audio/feedback/brilliant.mp3"),
        new Audio("./assets/audio/feedback/fab.mp3"),
        new Audio("./assets/audio/feedback/welldone.mp3"),
        new Audio("./assets/audio/feedback/goodjob.mp3"),
        new Audio("./assets/audio/feedback/thatsgreat.mp3"),
        new Audio("./assets/audio/feedback/silent.mp3")
    ];

    var sound = sounds[Math.floor(Math.random() * sounds.length)];
    sound.play();
};