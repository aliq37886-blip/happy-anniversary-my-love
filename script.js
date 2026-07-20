let btn=document.getElementById("musicBtn");

let song=document.getElementById("song");


let play=false;


btn.onclick=function(){


if(play){

song.pause();

btn.innerHTML="🎵 Start Our Song";

play=false;


}

else{


song.play();

btn.innerHTML="⏸ Pause Music";

play=true;


}


}
