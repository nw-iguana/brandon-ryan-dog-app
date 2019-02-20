'use strict'

console.log('Javascript is good to go');

// Submitting form function
$('form') .on('submit', function(event) {
    event.preventDefault();
    let numberOfDogs = document.getElementById('dogNumber').value;
    getDogImages(numberOfDogs);
});

function getDogImages(numberOfDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(data => data.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Your dog cannot be found') 
)};

function createImgTag() {
    
}

function renderDogs() {

}


