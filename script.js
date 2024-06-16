console.log("Welcome to spotify");

// Initialize the Varaible
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals (feat. Laura Brehm) [NCS Release]",
    filePath: "./songs/1.mp3",
    coverPath: "Covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "./songs/2.mp3",
    coverPath: "Covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible",
    filePath: "./songs/3.mp3",
    coverPath: "Covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart",
    filePath: "./songs/4.mp3",
    coverPath: "Covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johning-NCS",
    filePath: "./songs/5.mp3",
    coverPath: "Covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "./songs/6.mp3",
    coverPath: "Covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "./songs/7.mp3",
    coverPath: "Covers/7.jpg",
  },
  {
    songName: "Bhula Dena",
    filePath: "./songs/8.mp3",
    coverPath: "Covers/8.jpg",
  },
  {
    songName: "Na or deewana kr",
    filePath: "./songs/9.mp3",
    coverPath: "Covers/9.jpg",
  },
  {
    songName: "jindgi",
    filePath: "./songs/10.mp3",
    coverPath: "Covers/10.jpg",
  },
];
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// Listen to Event
audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `./songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity =1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
