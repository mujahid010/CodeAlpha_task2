let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let currentTimeEl = document.getElementById("current-time");
let durationEl = document.getElementById("duration");
let progress = document.getElementById("progress");

let songs = [
  {src: "/storage/emulated/0/Download/Teri diwani.mp3", title: "Teri diwani ", artist: "Artist unknown"},
  {src: "/storage/emulated/0/Download/Tu hi haqeeqat.mp3", title: "Tu hi haqeeqat", artist: "Artist javed & pretam"},
  { src:"/storage/emulated/0/Download/No-Love.mp3", title:"No Love"  , artist:"Artist Shubh " },
{src:"/storage/emulated/0/Download/Kabhi Tumhe.mp3", title:"Kabhi Tumhe ",artist:"Artist unknown"}
];
let current = 0;

function loadSong(index) {
  let song = songs[index];
  audio.src = song.src;
  title.innerText = song.title;
  artist.innerText = song.artist;
}
function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}
function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  audio.play();
}
function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  audio.play();
}
function setProgress(val) {
  audio.currentTime = (val / 100) * audio.duration;
}
audio.ontimeupdate = () => {
  document.getElementById("progress").value = (audio.currentTime / audio.duration) * 100;
};
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) seconds = "0" + seconds;
  return `${minutes}:${seconds}`;
}

audio.ontimeupdate = () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.innerText = formatTime(audio.currentTime);
    durationEl.innerText = formatTime(audio.duration);
  }
};

loadSong(current);


