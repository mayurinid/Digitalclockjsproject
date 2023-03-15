const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');
const meridianSlot=document.getElementsByClassName('meridian');
const button=document.getElementsByClassName("alaram")
button[0].addEventListener("mouseover",function(){
  this.innerText="Party Time"
})
button[0].addEventListener("mouseout",function(){
  this.innerText="Set Alaram"
})
button[0].addEventListener("click",function(){
  let scale1=document.getElementsByClassName("timemsg")
  let scale2=document.getElementsByClassName("timing")
scale1[0].style.transform="scaleX(1.2)"
scale1[0].style.fontSize="10px"
scale2[0].style.fontSize="10px"
scale2[1].style.fontSize="10px"
scale2[2].style.fontSize="10px"
scale2[3].style.fontSize="10px"

})
button[0].addEventListener("click",function(){
  let dateToday =new Date();
  let hr=dateToday.getHours();
  let wakeup=document.getElementById("wakeup")
  let lunchtime=document.getElementById("lunchtime")
  let naptime=document.getElementById("naptime")
  let nighttime=document.getElementById("nighttime")

  if(parseInt(wakeup.value)===hr){
    let msg=document.getElementsByClassName("msg");
        msg[0].innerText="GRAB SOME HEALTHY BREAKFAST!!!"
        // let im=document.querySelector("#imgdis");
        // im.setAtribute("src","./Component 30 – 1.jpg")
  }
  else if(parseInt(lunchtime.value)===hr){
    let msg=document.getElementsByClassName("msg");
       msg[0].innerText="LET'S HAVE SOME LUNCH !!"
      //  let im=document.querySelector("#imgdis");
      //  im.setAtribute("src","./lunchimage.png")
  }
  else if(parseInt(naptime.value)===hr){
    let msg=document.getElementsByClassName("msg");
    msg[0].innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
    // let im=document.querySelector("#imgdis");
    // im.setAtribute("src","./tea.png")
  }
else if(parseInt(nighttime.value)===hr){
    let msg=document.getElementsByClassName("msg");
       msg[0].innerText="CLOSE YOUR EYES AND GO TO SLEEP"
      //  let im=document.querySelector("#imgdis");
      //  im.setAtribute("src","./sleep.jpg")
  }
  let timing=document.getElementsByClassName("timing");
  let s=document.querySelectorAll("timing")
  timing[0].innerText=wakeup.options[wakeup.selectedIndex].text;
  timing[1].innerText=lunchtime.options[lunchtime.selectedIndex].text;
  timing[2].innerText=naptime.options[naptime.selectedIndex].text;
  timing[3].innerText=nighttime.options[nighttime.selectedIndex].text;
})

const clock=setInterval(function time(){
  let dateToday =new Date();
let hr=dateToday.getHours();

let min=dateToday.getMinutes();
let sec=dateToday.getSeconds();
console.log(hr)
let meridian;
if(hr>=12){
  hr-=12;
  meridian="PM"
}else{
    meridian="AM"
}

if(hr<10){
hr='0'+hr;
}
if(min<10){
    min='0'+min;
}
if(sec<10){
    sec='0'+sec;
}
    hours.innerHTML=hr;
minutes.innerHTML=min;
seconds.innerHTML=sec;
meridianSlot[0].innerHTML=meridian;
},1000);
let time1 = new Date();
h= time1.getHours();
  let greeting;
let user=document.getElementsByClassName('wishmsg');

 if (h >= 12 && h <=16 ) {
     user[0].innerText = "Good Afternoon !! Take Some Sleep "
     let im=document.getElementById("imgdis");
       im.src="./lunchimage.png"
    
   }

 else if (h>= 16 && h <=20) {
        user[0].innerText = "Good Evening !! "
        let im=document.getElementById("imgdis");
        im.src="./tea.png" 
 }
 else if (h>=20 && h<=24 ) {
      user[0].innerText = "Good Night !!"
      let im=document.getElementById("imgdis");
      im.src="./sleep.jpg"
             }

           