

function handleMotion(event) {
  console.log('-----------------');
  let gyro_z = event.rotationRate.alpha;
  let gyro_x = event.rotationRate.beta;
  let gyro_y = event.rotationRate.gamma;
  windows.style.transform = `rotateY(${gyro_x}deg) rotateX(${gyro_y}deg)`;
  console.log(gyro_z);
  console.log(gyro_x);
  console.log(gyro_y);
}

function gyros(e){  
  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  
  {
    window.addEventListener("devicemotion", handleMotion);
  }
};

const windows = document.querySelector('.windows');
const room = document.querySelector(".room");
const title = document.querySelector(".title");
const profliepic = document.querySelector(".profilepic img");
const tabs = document.querySelector(".tabs");
const desc = document.querySelector(".about h4");

room.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2 -e.pageX)/10;
    let yAxis = (window.innerHeight/2 -e.pageY)/10;
    windows.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    title.style.transform='translateZ(120px)';
    profliepic.style.transform='translateZ(120px)'
    desc.style.transform='translateZ(120px)';
    title.style.background='linear-gradient(to right,rgba(163, 68, 218, 0.8),rgba(42, 196, 216, 0.8))';
    title.style.color='pink'
    tabs.style.transform='translateZ(120px)';
    title.style.transform='translateZ(120px)';

});

room.addEventListener('mouseenter',(e)=>{
    windows.style.transition='none';
});
room.addEventListener('mouseleave',(e)=>{
    windows.style.transition="all 0.6s ease";
    windows.style.transform = `rotateY(0deg)`
    title.style.transform='translateZ(0px)';
    profliepic.style.transform='translateZ(0px) rotateZ(0deg)'
    desc.style.transform='translateZ(0px)';
    tabs.style.transform='translateZ(0px)';
    title.style.transform='translateZ(0px)';
});