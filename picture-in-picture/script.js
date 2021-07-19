const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element,then play

async function selectMediaStream(){
	try{
      const mediaStream = await navigator.mediaDevices
      .getDisplayMedia();
	  videoElement.srcObject = mediaStream;
	  videoElement.onloadedmetadata = () => {
	  	videoElement.play();
	  }
	} catch(error){
		console.log('whooops,error here:', error);
	}
}

button.addEventListener('click', async () =>{
     //disable button
	button.disabled = true;
	//start picture in picture
	await videoElement.requestPictureInPicture();
	//reset btn
	button.disabled = false;
}); 


//on load
selectMediaStream();

//mediastream user selects media.add to video src & when loaded it plays