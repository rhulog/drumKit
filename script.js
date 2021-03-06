function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //stop function from running altogether

    audio.currentTime = 0; //rewinds from start
    audio.play();

    key.classList.add('playing'); //add CSS styles
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}

let keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound);