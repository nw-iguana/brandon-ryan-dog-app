'use strict'

console.log('Javascript is good to go');

// Submitting form function
$('form') .on('submit', function(event) {
    event.preventDefault();
    let numberOfDogs = document.getElementById('dogNumber').value;
    getDogImages(numberOfDogs);
});

function getDogImages(breedOfDog) {
    fetch(`https://dog.ceo/api/breed/${breedOfDog}/images/random`)
    .then(response => {
        console.log(response.status);
        //happy path :)
        if(response.ok) {
        return response.json();
        }
        //sad path :(
        throw new Error("We couldn't find your dog :(");
    })
    .then(responseJson => {
        console.log(responseJson.message);
        renderDogs(responseJson.message);
    }).catch(error => console.error('Error:', error));

};

function createImgTag(imageSource) {
    return `<img src="${imageSource}" alt="picture of a dog">`;
}

function renderDogs(responseJsonMessage) {
    let imgString = createImgTag(responseJsonMessage);

    let output = document.getElementById('output');
    console.log(output)

    output.innerHTML = imgString;
}


