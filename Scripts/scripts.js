
function ConstructionMsg(){
  alert("Under Construction :)")
}



  document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const playButton = document.getElementById("playButton");
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");

    const playlist = [
        "Audio/audio2.mp3",
        "Audio/audio3.mp3",
    ];

    let currentSongIndex = 0;

    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fa fa-pause" style="font-size:14px"></i>';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" style="font-size:14px"></i>';
        }
    });

    previousButton.addEventListener("click", function () {
        if (currentSongIndex > 0) {
            currentSongIndex--;
        }
        audio.src = playlist[currentSongIndex];
        audio.play();
    });

    nextButton.addEventListener("click", function () {
        if (currentSongIndex < playlist.length - 1) {
            currentSongIndex++;
        }
        audio.src = playlist[currentSongIndex];
        audio.play();
    });
});

function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}