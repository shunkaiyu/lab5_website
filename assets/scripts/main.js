// main.js

// TODO

var volume_num = document.getElementById("volume-number");
var volume_slider = document.getElementById("volume-slider");
var vol_img = document.getElementById('volume-image');
var audio_source = document.getElementById('horn-sound');
var honk = document.getElementById("honk-btn");
var air = document.getElementById('radio-air-horn');
var car = document.getElementById('radio-car-horn');
var party = document.getElementById('radio-party-horn');
var sound_img = document.getElementById('sound-image');


volume_slider.addEventListener("input",slider2text);
function slider2text(){
    volume_num.value = volume_slider.value;
    audio_source.volume = volume_slider.value/100;
    if(volume_slider.value == 0){
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
    else if (0<volume_slider.value && volume_slider.value<=33){
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
        honk.disabled = false;
    }
    else if (33<volume_slider.value && volume_slider.value<67){
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
        honk.disabled = false;
    }
    else 
    {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
        honk.disabled = false;
    }
}

volume_num.addEventListener("input",text2slider);
function text2slider(){
    volume_slider.value = volume_num.value;
    audio_source.volume = volume_slider.value/100;
    if(volume_slider.value == 0){
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
    else if (0<volume_slider.value && volume_slider.value<=33){
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
        honk.disabled = false;
    }
    else if (33<volume_slider.value && volume_slider.value<67){
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
        honk.disabled = false;
    }
    else 
    {    
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
        honk.disabled = false;
    }
}

air.addEventListener('input',selectAir);
function selectAir(){
    audio_source.src = "./assets/media/audio/air-horn.mp3";
    sound_img.src = "./assets/media/images/air-horn.svg";
    sound_img.alt = "Air Horn";
}

car.addEventListener('input',selectCar);
function selectCar(){
    audio_source.src = "./assets/media/audio/car-horn.mp3";
    sound_img.src = "./assets/media/images/car.svg";
    sound_img.alt = "Car Horn";
}

party.addEventListener('input',selectParty);
function selectParty(){
    audio_source.src = "./assets/media/audio/party-horn.mp3";
    sound_img.src = "./assets/media/images/party-horn.svg";
    sound_img.alt = "Party Horn";
}

audio_source.addEventListener('input', realtime);
function realtime(){
    audio_source.volume = volume_slider.value/100;
}

honk.addEventListener('click', function(event){
    event.preventDefault();
    if (volume_num != 0){
        //audio_source.volume = (volume_num.value)/100;
        audio_source.play();
    }
});

