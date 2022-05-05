// import { playerChoice } from './choice.js'


const timeElapsed = Date.now();
const today = new Date(timeElapsed);

document.querySelector('.date').innerHTML = today.toDateString()



let characterList = []
fetch('https://swapi.dev/api/people/')
    .then(response =>
        response.json())
    .then(data => {

        data.results.forEach(item => {
            characterList.push(item)
            console.log(item)
        })
        for (let i = 0; i < characterList.length; i++) {
            makeInfoElement(characterList[i], i + 1)
            console.log(data.results)
        }
        var characterDivs = document.getElementsByClassName('carousel-item');
        let playerCharacter = undefined;
        // let choiceFrame = document.querySelector('.choice-frame');
        console.log(choiceFrame)

        function chooseCharacter(elements) {
            for (let i = 0; i < elements.length; i++) {
                console.log(elements[i].classList)
                for (let j = 0; j < elements[i].classList.length; j++) {
                    if (elements[i].classList[j] == 'active') {
                        playerCharacter = elements[i];
                    }

                }
            }

            playerChoice = playerCharacter

        }

        let continueButton = document.querySelector('.continue-button-inner')
        console.log(continueButton)
        continueButton.addEventListener('click', chooseCharacter(characterDivs));
    })


function makeInfoElement(characterInfo, count) {

    let carousel = document.querySelector('.carousel-inner');

    let newItem = document.createElement('div');
    newItem.classList.add('carousel-item');
    if (count === 10) {
        newItem.classList.add('active');
    }
    newItem.setAttribute('data-bs-interval', '10000');

    // let itemContainerDiv = document.createElement('div');
    // itemContainerDiv.classList.add('item-container');

    var infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');

    var nameDiv = document.createElement("div");
    nameDiv.classList.add("character-item-name");

    var characterImage = document.createElement("img");
    characterImage.classList.add("character-item-image");
    characterImage.src = `images/character-images/${count}.jpeg`;

    var dobDiv = document.createElement("div");
    dobDiv.classList.add("character-item-dob");

    var genderDiv = document.createElement("div");
    genderDiv.classList.add("character-item-gender");

    var heightDiv = document.createElement("div");
    heightDiv.classList.add("character-item-height");

    var nameNode = document.createTextNode(`Name: ${characterInfo.name}`);
    var dobNode = document.createTextNode(`DOB: ${characterInfo.birth_year}`);
    var genderNode = document.createTextNode(`Gender: ${characterInfo.gender}`);
    var heightNode = document.createTextNode(`Height: ${characterInfo.height}`);

    nameDiv.appendChild(nameNode);
    dobDiv.appendChild(dobNode);
    genderDiv.appendChild(genderNode);
    heightDiv.appendChild(heightNode);

    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(dobDiv);
    infoDiv.appendChild(genderDiv);
    infoDiv.appendChild(heightDiv);

    newItem.appendChild(characterImage);
    newItem.appendChild(infoDiv);

    carousel.appendChild(newItem);

}

let chewieTalk = document.querySelector('.chewieTalk');
chewieTalk.innerText = "Welcome to the Game! Choose a Character";








// let chewie = document.querySelector('chewieCompanion')
// chewie.addEventListener('click', function () {
//     chewieTalk.innerHTML = "bleh"
// })


// async function fetchChars() {
//     try {
//         const response = await fetch('https://swapi.dev/api/people/');
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log(json.results)
//         for (let i = 0; i < json.results.length; i++) {
//             characterList.push(json.results[i])
//         }
//         console.log(characterList)
//         console.log('hello')
//         // var charItems = document.querySelector('.character-items')
//         // // var newDiv = document.createElement("div");
//         // // newDiv.classList.add("character-item")
//         // // var textDiv = document.createElement("div");
//         // // textDiv.classList.add("character-item-name")
//         // // var characterName = charShell.;
//         // var newImage = document.createElement("img");
//         // newImage.src = "https://swapi.dev/api/people/1.jpg"; "./assets/img/people/1.jpg"
//         // charItems.appendChild(newImage);
//         // return charShell
//     }
//     catch (error) {
//         console.error(`Could not get info: ${error}`);
//     }
// }

// let buttonOne = document.querySelector('.btn-one');
// buttonOne.addEventListener('click', fetchChars())