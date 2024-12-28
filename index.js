const image = document.getElementById('cover'),
title = document.getElementById('music-title'),
artist = document.getElementById('music-artist'),
currentTimeEl = document.getElementById('current-time'),
durationEl = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn = document.getElementById('Prev'),
nextBtn = document.getElementById('Next'),
playBtn = document.getElementById('Play'),
shuffleBtn = document.getElementById('Shuffle'),
background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: "assets/Shawn Mendes/Monster/Monster.mp3",
        displayName: "Monster",
        cover: "assets/Shawn Mendes/Monster/Monster.jpeg",
        artist: "Shawn Mendes, Justin Bieber",
    },
    {
        path: "assets/Sael/Me Enseñaste (Remix)/Me Enseñaste (Remix).mp3",
        displayName: "Me Enseñaste (Remix)",
        cover: "assets/Sael/Me Enseñaste (Remix)/Me Enseñaste (Remix).jpeg",
        artist: "Sael, Duki",
    }, 
    {
        path: "assets/Ariana Grande/Stuck with U/Stuck with U.mp3",
        displayName: "Stuck with U",
        cover: "assets/Ariana Grande/Stuck with U/Stuck with U.jpeg",
        artist: "Ariana Grande, Justin Bieber",
    },
    {
        path: 'assets/Ariana Grande/Positions/12. positions.mp3',
        displayName: "positions",
        cover: "assets/Ariana Grande/Positions/Positions.jpg",
        artist: "Ariana Grande",
    },
    {
        path: "assets/Drake/Scorpion/05. God's Plan.mp3",
        displayName: "God's Plan",
        cover: "assets/Drake/Scorpion/Scorpion.jpg",
        artist: "Drake",
    },
    {
        path: "assets/Post Malone/Hollywood's Bleeding/06. Circles.mp3",
        displayName: "Circles",
        cover: "assets/Post Malone/Hollywood's Bleeding/Hollywood's Bleeding.jpg",
        artist: "Post Malone",
    },  
    {
        path: "assets/Duki/AMERI/02. Nueva Era.mp3",
        displayName: "Nueva Era",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Myke Towers",
    },
    {
        path: "assets/Duki/AMERI/03. Brindis.mp3",
        displayName: "Brindis",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Headie One",
    },
    {
        path: "assets/Duki/AMERI/04. Buscarte Lejos.mp3",
        displayName: "Buscarte Lejos",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Bizarrap",
    },
    {
        path: "assets/Duki/AMERI/05. Imperio.mp3",
        displayName: "Imperio",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Judeline",
    },
    {
        path: "assets/Duki/AMERI/06. Hardaway.mp3",
        displayName: "Hardaway",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, YG, Eladio Carrión",
    },
    {
        path: "assets/Duki/AMERI/07. Cine.mp3",
        displayName: "Cine",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki",
    },
    {
        path: "assets/Duki/AMERI/08. Vida De Rock.mp3",
        displayName: "Vida De Rock",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Milo j",
    },
    {
        path: "assets/Duki/AMERI/09. No Drama.mp3",
        displayName: "No Drama",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Ovi, Lucho SSJ",
    },
    {
        path: "assets/Duki/AMERI/10. Barro.mp3",
        displayName: "Barro",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki",
    },
    {
        path: "assets/Duki/AMERI/11. Un Día Más.mp3",
        displayName: "Un Día Más",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, YSY A",
    },
    {
        path: "assets/Duki/AMERI/12. Trato De Estar Bien.mp3",
        displayName: "Trato De Estar Bien",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Morad",
    },
    {
        path: "assets/Duki/AMERI/13. Wake Up & Bake Up.mp3",
        displayName: "Wake Up & Bake Up",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Wiz Khalifa, Arcángel",
    },
    {
        path: "assets/Duki/AMERI/14. Constelación.mp3",
        displayName: "Constelación",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki, Lia Kali",
    },
    {
        path: "assets/Duki/AMERI/15. Ameri.mp3",
        displayName: "Ameri",
        cover: "assets/Duki/AMERI/AMERI.jpg",
        artist: "Duki",
    },
];

let musicIndex = 0;
let isPlaying = false;

function getRandomSongIndex() {
    return Math.floor(Math.random() * songs.length);
}

function initializePlayer() {
    musicIndex = getRandomSongIndex();
    loadMusic(songs[musicIndex]);
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function playMusic() {
    isPlaying = true;
    console.log("Playing music at:", music.currentTime);
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    console.log("Pausing music at:", music.currentTime);
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function togglePlayPause() {
    console.log("Toggling play/pause at:", music.currentTime);
    isPlaying ? pauseMusic() : playMusic();
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic(); // Solo reproduce al cambiar canción
}

function changeMusic(direction) {
    if (isShuffling) {
        musicIndex = getRandomSongIndex();
    } else {
        musicIndex = (musicIndex + direction + songs.length) % songs.length;
    }
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

        const formatTime = (time) => String (Math.floor(time)).padStart(2, '0')

        const durationMinutes = Math.floor(duration / 60) || 0;
        const durationSeconds = Math.floor(duration % 60) || 0;
        const currentMinutes = Math.floor(currentTime / 60) || 0;
        const currentSeconds = Math.floor(currentTime % 60) || 0;

        durationEl.textContent = `${(durationMinutes)}:${formatTime(durationSeconds)}`;
        currentTimeEl.textContent = `${(currentMinutes)}:${formatTime(currentSeconds)}`;
    }

function setProgressBar  (e){
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    if (!isNaN(music.duration)) {
        music.currentTime = (clickX / width) * music.duration;
    } else {
        console.error('Duration is not available yet.');
    }
}

function shuffleSongs() {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    console.log("Songs shuffled:", songs);
}

let isShuffling = false;

function toggleShuffle() {
    isShuffling = !isShuffling;
    if (isShuffling) {
        shuffleSongs();
    }
    console.log("Shuffle mode:", isShuffling ? "ON" : "OFF");
}

playBtn.removeEventListener('click', togglePlayPause);
playBtn.addEventListener('click', () => {
    console.log("Play button clicked.");
    togglePlayPause();
});
prevBtn.removeEventListener('click', () => changeMusic(-1));
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.removeEventListener('click', () => changeMusic(1));
nextBtn.addEventListener('click', () => changeMusic(1));
shuffleBtn.addEventListener('click', () => {
    toggleShuffle();
    if (isShuffling) {
        musicIndex = 0;
        loadMusic(songs[musicIndex]);
        playMusic();
    }
});
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('loadedmetadata', () => {
    console.log('Duration loaded:', music.duration);
});
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

document.addEventListener('DOMContentLoaded', () => {
    initializePlayer();
});