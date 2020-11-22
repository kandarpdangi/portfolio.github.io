
function updateFieldIfNotNull(fieldName, value){
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed();
    console.log(fieldName ,' - ' ,value);
}

function handleMotion(event) {
  console.log('hello');
  updateFieldIfNotNull('Gyroscope_z', event.rotationRate.alpha);
  updateFieldIfNotNull('Gyroscope_x', event.rotationRate.beta);
  updateFieldIfNotNull('Gyroscope_y', event.rotationRate.gamma);
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