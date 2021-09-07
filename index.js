// Todo List
// select all the drum elements and add event listener
// play music

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`);
    currentKey.classList.add('pressed');
    setTimeout(()=> {
        currentKey.classList.remove('pressed');
    }, 250)
}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.play();
}

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey);
    animate(triggeredKey);
})

const makeSound = (key) => {
    
    switch(key){
        case "w":
            playMusic("sounds/sounds_sound-1.mp3");
            break;    
        case "a":
            playMusic("sounds/sounds_sound-2.mp3");
            break;
        case "s":
            playMusic("sounds/sounds_sound-3.mp3");
            break;
        case "d":
            playMusic("sounds/sounds_sound-4.mp3");
            break;
        case "j":
            playMusic("sounds/sounds_sound-5.mp3");
            break;
        case "k":
            playMusic("sounds/sounds_sound-6.mp3");
            break;
        case "l":
            playMusic("sounds/sounds_sound-7.mp3");
            break;
        default:
            console.log("Hey Wrong Button!");
    }
}

const handleDrumClick = (event) => {
    let innerHTML = event.target.innerHTML;
    animate(innerHTML);
    makeSound(innerHTML);
}

let drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++){
    drums[i] = addEventListener("click", handleDrumClick);
}
