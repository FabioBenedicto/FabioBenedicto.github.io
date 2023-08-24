const music = document.querySelector('.audio');
const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const partialTime = document.querySelector('.partial-time');
const totalTime = document.querySelector('.total-time');
var musicPlaying = 1;

function selectMusic(id) {

}


function backToPreviousMusic() {
    if (musicPlaying > 0) {
        const musicContainer = document.querySelector(`.music-container:nth-child(${musicPlaying+1})`);
        musicContainer.style.border = '';
        music.src = data.musics[musicPlaying].address;
        play(--musicPlaying);
    }
}

function goToNextMusic() {
    if (musicPlaying < data.musics.length - 1) {
        const musicContainer = document.querySelector(`.music-container:nth-child(${musicPlaying+1})`);
        musicContainer.style.border = '';
        music.src = data.musics[musicPlaying].address;
        play(++musicPlaying);
    }
}

function teste2() {
    music.src = './music2.mp3';
    partialTime.style.width = '0%';
    play();
}

totalTime.addEventListener('click', (event) => {
    const x = event.clientX;
    const time = (x / totalTime.clientWidth) * 100;
    console.log('oi' + time);
    partialTime.style.width = x;
    music.currentTime = (time / 100) * music.duration;
});

function pause() {
    
    music.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'inline-block';
}

function play(id) {
    var musicContainer = document.querySelector(`.music-container:nth-child(${musicPlaying+1})`);
    musicContainer.style.border = '';
     if (id != undefined) {
        musicPlaying = id;
    } else if (music.src != undefined) {
        musicPlaying = 0;
    }
    musicContainer = document.querySelector(`.music-container:nth-child(${musicPlaying+1})`);
    musicContainer.style.border = '1px solid black';
    music.src = data.musics[musicPlaying].address;
    music.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block'
}

function updateTime() {
    const time = (music.currentTime / music.duration) * 100;
    partialTime.style.width = `${time}%`;
}

const data = {
    musics: [
        {
            "id": 0,
            "name": "Anti-Hero",
            "address": "./musics/anti_hero.mp3"
        },
        {
            "id": 1,
            "name": "august",
            "address": "./musics/august.mp3"
        },
        {
            "id": 2,
            "name": "Blank Space",
            "address": "./musics/blank_space.mp3"
        },
        {
            "id": 3,
            "name": "Cruel Summer",
            "address": "./musics/cruel_summer.mp3"
        },
        {
            "id": 4,
            "name": "Foolish One",
            "address": "./musics/foolish_one.mp3"
        },
        {
            "id": 5,
            "name": "Karma",
            "address": "./musics/karma.mp3"
        },
        {
            "id": 6,
            "name": "Style",
            "address": "./musics/style.mp3"
        }
    ]
}

