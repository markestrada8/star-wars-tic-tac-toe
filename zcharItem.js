function makeInfoElement(characterInfo) {
    newItem = document.createElement('div');
    newItem.classList.add('carousel-item');

    var nameDiv = document.createElement("div");
    nameHeading.classList.add("character-item-name");

    var image = document.createElement("img");
    image.src = `images/character-images/${characterInfo.id}.jpeg`;

    var dobDiv = document.createElement("div");
    dobDiv.classList.add("character-item-dob");

    var genderDiv = document.createElement("div");
    genderDiv.classList.add("character-item-gender");

    var heightDiv = document.createElement("div");
    heightDiv.classList.add("character-item-height");

    var nameNode = document.createTextNode(itemName);
    var dobNode = document.createTextNode(itemName);
    var genderNode = document.createTextNode(itemName);
    var heightNode = document.createTextNode(itemName);

    nameDiv.appendChild(nameNode);
    dobDiv.appendChild(dobNode);
    genderDiv.appendChild(genderNode);
    heightDiv.appendChild(heightNode);

    newItem.appendChild(nameNode);
    newItem.appendChild(image);
    newItem.appendChild(genderNode);
    newItem.appendChild(heightNode);
}