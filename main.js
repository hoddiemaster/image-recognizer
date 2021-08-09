Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,

});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="' + data_uri + '">';
    });

}
console.log('ml5.version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M4ojzWuKO/model.json',modelloded);
function modelloded(){
    console.log('your pre-trained modal is perfectly ready');
}

function check (){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
if (error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("thing").innerHTML = results[0].label;
    document.getElementById("correction").innerHTML = results[0].confidence.toFixed(2)*100+" %";
    
}
}